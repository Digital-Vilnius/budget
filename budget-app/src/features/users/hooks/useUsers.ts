import { useAppSelector } from '@core/store';
import { UsersClient } from '@api/clients';
import { PagingUtils } from '@utils';
import { useInfiniteQuery } from 'react-query';
import { UsersFilter } from '@api/clients/users/types';
import { mapUser } from '../map';

export const getQueryKey = (filter: UsersFilter) => {
  return ['users', filter];
};

const useUsers = () => {
  const { filter } = useAppSelector((state) => state.users);

  const getUsersFn = async ({ pageParam = 0 }) => {
    const paging = PagingUtils.getPaging(pageParam);
    return UsersClient.getUsers({ filter, paging });
  };

  const { isLoading, isRefetching, refetch, hasNextPage, fetchNextPage, data } = useInfiniteQuery(
    getQueryKey(filter),
    getUsersFn,
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
    users: data?.pages.map((page) => page.result.map(mapUser)).flat() ?? [],
    isLoading,
    isRefetching,
    refetch,
    loadMore: () => hasNextPage && fetchNextPage(),
  };
};

export default useUsers;
