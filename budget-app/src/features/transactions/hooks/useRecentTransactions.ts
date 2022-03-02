import { TransactionsClient } from '@api/clients';
import { useQuery } from 'react-query';
import { useAppSelector } from '@core/store';
import { TransactionsFilter } from '@api/clients/transactions/types';
import { Paging } from '@api/types';
import { mapTransaction } from '../map';

export const getQueryKey = (filter: TransactionsFilter, paging: Paging) => {
  return ['recent-transactions', filter, paging];
};

const useRecentTransactions = (limit: number = 5) => {
  const { filter } = useAppSelector((state) => state.transactions);
  const paging: Paging = { limit, offset: 0 };

  const getTransactionsFn = async () => {
    return TransactionsClient.getTransactions({ filter, paging });
  };

  const { isLoading, isRefetching, refetch, data } = useQuery(
    getQueryKey(filter, paging),
    getTransactionsFn
  );

  return {
    count: data?.count ?? 0,
    transactions: data?.result.map(mapTransaction) ?? [],
    isLoading,
    isRefetching,
    refetch,
  };
};

export default useRecentTransactions;
