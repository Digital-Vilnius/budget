import { CategoriesClient } from '@api/clients';
import { useQuery } from 'react-query';
import { mapCategory } from '../map';

export const getQueryKey = (id: number) => {
  return ['category', id];
};

interface Props {
  id: number;
}

const useCategory = (props: Props) => {
  const { id } = props;

  const getCategoryFn = () => CategoriesClient.getCategory(id);
  const { isLoading, data, isRefetching, refetch } = useQuery(getQueryKey(id), getCategoryFn);

  return {
    isLoading,
    isRefetching,
    refetch,
    category: data ? mapCategory(data.result) : null,
  };
};

export default useCategory;
