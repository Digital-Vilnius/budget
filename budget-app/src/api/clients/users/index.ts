import { ListRequest, ListResponse } from '@api/types';
import httpClient from '@api/httpClient';
import { User, UsersFilter } from './types';

const baseUrl = '/users';

export const getUsers = async (request: ListRequest<UsersFilter>) => {
  const params = { ...request.paging, ...request.filter };
  return httpClient.get<ListRequest<UsersFilter>, ListResponse<User>>(baseUrl, { params });
};
