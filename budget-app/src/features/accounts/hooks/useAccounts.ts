import { useAppSelector } from '@core/store';
import { AccountsFilter } from '@api/clients/accounts/types';
import { AccountsClient } from '@api/clients';
import { PagingUtils } from '@utils';
import { useInfiniteQuery } from 'react-query';
import { mapAccount } from '../map';

export const getQueryKey = (filter: AccountsFilter) => {
  return ['accounts', filter];
};

const useAccounts = () => {
  const { filter } = useAppSelector((state) => state.accounts);

  const getAccountsFn = async ({ pageParam = 0 }) => {
    const paging = PagingUtils.getPaging(pageParam);
    return AccountsClient.getAccounts({ filter, paging });
  };

  const { isLoading, isRefetching, refetch, hasNextPage, fetchNextPage, data } = useInfiniteQuery(
    getQueryKey(filter),
    getAccountsFn,
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
    accounts: data?.pages.map((page) => page.result.map(mapAccount)).flat() ?? [],
    isLoading,
    isRefetching,
    refetch,
    loadMore: () => hasNextPage && fetchNextPage(),
  };
};

export default useAccounts;
