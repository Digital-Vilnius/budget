import { AccountsClient } from '@api/clients';
import { useQuery } from 'react-query';
import { useAppDispatch } from '@core/store';
import { setSelectedAccount } from '@features/accounts/slice';
import { mapAccount } from '../map';

export const getQueryKey = (id: number) => {
  return ['account', id];
};

interface Props {
  id: number;
}

const useAccount = (props: Props) => {
  const { id } = props;
  const dispatch = useAppDispatch();

  const getAccountFn = () => AccountsClient.getAccount(id);
  const { isLoading, data, isRefetching, refetch } = useQuery(getQueryKey(id), getAccountFn, {
    onSuccess: (response) => dispatch(setSelectedAccount({ account: mapAccount(response.result) })),
  });

  return {
    isLoading,
    isRefetching,
    refetch,
    account: data ? mapAccount(data.result) : null,
  };
};

export default useAccount;
