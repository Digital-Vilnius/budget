import { useAppSelector } from '@core/store';
import { CategoriesClient } from '@api/clients';
import { PagingUtils } from '@utils';
import { useInfiniteQuery } from 'react-query';
import { CategoriesFilter } from '@api/clients/categories/types';
import { mapCategory } from '../map';

export const getQueryKey = (filter: CategoriesFilter) => {
  return ['categories', filter];
};

const useCategories = () => {
  const { filter } = useAppSelector((state) => state.categories);

  const getCategoriesFn = async ({ pageParam = 0 }) => {
    const paging = PagingUtils.getPaging(pageParam);
    return CategoriesClient.getCategories({ filter, paging });
  };

  const { isLoading, isRefetching, refetch, hasNextPage, fetchNextPage, data } = useInfiniteQuery(
    getQueryKey(filter),
    getCategoriesFn,
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
    categories: data?.pages.map((page) => page.result.map(mapCategory)).flat() ?? [],
    isLoading,
    isRefetching,
    refetch,
    loadMore: () => hasNextPage && fetchNextPage(),
  };
};

export default useCategories;
