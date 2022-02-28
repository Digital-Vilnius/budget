import { ListRequest, ListResponse, ResultResponse } from '@api/types';
import httpClient from '@api/httpClient';
import { CategoriesFilter, Category } from './types';

const baseUrl = '/categories';

export const getCategories = async (request: ListRequest<CategoriesFilter>) => {
  const params = { ...request.paging, ...request.filter };
  return httpClient.get<ListRequest<CategoriesFilter>, ListResponse<Category>>(baseUrl, { params });
};

export const getCategory = async (id: number) => {
  return httpClient.get<void, ResultResponse<Category>>(`${baseUrl}/${id}`);
};
