import { AccountsFilter } from '@api/clients/accounts/types';
import { AccountsClient } from '@api/clients';
import { useQuery } from 'react-query';
import { useAppSelector } from '@core/store';
import { mapAccount } from '../map';

export const getQueryKey = (filter: AccountsFilter) => {
  return ['accounts', filter];
};

const useAccounts = () => {
  const userId = useAppSelector((state) => state.auth.userId) ?? undefined;

  const getAccountsFn = async () => {
    return AccountsClient.getAccounts({ userId });
  };

  const { isLoading, isRefetching, refetch, data } = useQuery(
    getQueryKey({ userId }),
    getAccountsFn
  );

  return {
    count: data?.count ?? 0,
    accounts: data?.result.map(mapAccount) ?? [],
    isLoading,
    isRefetching,
    refetch,
  };
};

export default useAccounts;
