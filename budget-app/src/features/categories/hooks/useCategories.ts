import { CategoriesClient } from '@api/clients';
import { useQuery } from 'react-query';
import { useAppSelector } from '@core/store';
import { CategoriesFilter } from '@api/clients/categories/types';
import { mapCategory } from '../map';

export const getQueryKey = (filter: CategoriesFilter) => {
  return ['accounts', filter];
};

const useCategories = () => {
  const { filter } = useAppSelector((state) => state.categories);

  const getCategoriesFn = async () => {
    return CategoriesClient.getCategories({ filter });
  };

  const { isLoading, isRefetching, refetch, data } = useQuery(getQueryKey(filter), getCategoriesFn);

  return {
    count: data?.count ?? 0,
    categories: data?.result.map(mapCategory) ?? [],
    isLoading,
    isRefetching,
    refetch,
  };
};

export default useCategories;
