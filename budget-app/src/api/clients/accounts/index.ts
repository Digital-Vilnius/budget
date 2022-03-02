import { ListRequest, ListResponse, ResultResponse } from '@api/types';
import httpClient from '@api/httpClient';
import { Account, AccountsFilter } from './types';

const baseUrl = '/accounts';

export const getAccounts = async (request: ListRequest<AccountsFilter>) => {
  const params = { ...request.paging, ...request.filter };
  return httpClient.get<ListRequest<AccountsFilter>, ListResponse<Account>>(baseUrl, { params });
};

export const getAccount = async (id: number) => {
  return httpClient.get<void, ResultResponse<Account>>(`${baseUrl}/${id}`);
};
