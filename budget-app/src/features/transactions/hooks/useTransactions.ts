import { useAppSelector } from '@core/store';
import { TransactionsClient } from '@api/clients';
import { PagingUtils } from '@utils';
import { useInfiniteQuery } from 'react-query';
import { TransactionsFilter } from '@api/clients/transactions/types';
import { mapTransaction } from '../map';

export const getQueryKey = (filter: TransactionsFilter) => {
  return ['transactions', filter];
};

const useTransactions = () => {
  const { filter } = useAppSelector((state) => state.transactions);
  const selectedAccount = useAppSelector((state) => state.accounts.selectedAccount);
  const combinedFilter = { ...filter, accountId: selectedAccount?.id };

  const getTransactionsFn = async ({ pageParam = 0 }) => {
    const paging = PagingUtils.getPaging(pageParam);
    return TransactionsClient.getTransactions({ filter: combinedFilter, paging });
  };

  const { isLoading, isRefetching, refetch, hasNextPage, fetchNextPage, data } = useInfiniteQuery(
    getQueryKey(combinedFilter),
    getTransactionsFn,
    {
      getNextPageParam: (lastPage, allPages) => {
        const lastCount = lastPage.count;
        const fetchedCount = allPages.map((page) => page.result).flat().length;
        if (fetchedCount >= lastCount) return false;
        return PagingUtils.getCurrentPage(fetchedCount, lastCount) + 1;
      },
    }
  );

  return {
    count: data?.pages[data?.pages.length - 1].count ?? 0,
    transactions: data?.pages.map((page) => page.result.map(mapTransaction)).flat() ?? [],
    isLoading,
    isRefetching,
    refetch,
    loadMore: () => hasNextPage && fetchNextPage(),
  };
};

export default useTransactions;
