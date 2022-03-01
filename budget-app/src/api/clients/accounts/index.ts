import { ListResponse } from '@api/types';
import httpClient from '@api/httpClient';
import { Account, AccountsFilter } from './types';

const baseUrl = '/accounts';

export const getAccounts = async (filter: AccountsFilter) => {
  const params = { ...filter };
  return httpClient.get<AccountsFilter, ListResponse<Account>>(baseUrl, { params });
};
