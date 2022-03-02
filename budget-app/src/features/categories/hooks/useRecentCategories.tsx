import { CategoriesClient } from '@api/clients';
import { useQuery } from 'react-query';
import { useAppSelector } from '@core/store';
import { CategoriesFilter } from '@api/clients/categories/types';
import { Paging } from '@api/types';
import { mapCategory } from '../map';

export const getQueryKey = (filter: CategoriesFilter, paging: Paging) => {
  return ['recent-categories', filter, paging];
};

const useRecentCategories = (limit: number = 8) => {
  const { filter } = useAppSelector((state) => state.categories);
  const paging: Paging = { limit, offset: 0 };

  const getCategoriesFn = async () => {
    return CategoriesClient.getCategories({ filter, paging });
  };

  const { isLoading, isRefetching, refetch, data } = useQuery(
    getQueryKey(filter, paging),
    getCategoriesFn
  );

  return {
    count: data?.count ?? 0,
    categories: data?.result.map(mapCategory) ?? [],
    isLoading,
    isRefetching,
    refetch,
  };
};

export default useRecentCategories;
