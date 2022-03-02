import { AccountsClient } from '@api/clients';
import { useQuery } from 'react-query';
import { mapAccount } from '../map';

export const getQueryKey = (id: number) => {
  return ['account', id];
};

interface Props {
  id: number;
}

const useAccount = (props: Props) => {
  const { id } = props;

  const getAccountFn = () => AccountsClient.getAccount(id);
  const { isLoading, data, isRefetching, refetch } = useQuery(getQueryKey(id), getAccountFn);

  return {
    isLoading,
    isRefetching,
    refetch,
    account: data ? mapAccount(data.result) : null,
  };
};

export default useAccount;
