import { ListRequest, ListResponse } from '@api/types';
import httpClient from '@api/httpClient';
import { Transaction, TransactionsFilter } from './types';

const baseUrl = '/transactions';

export const getTransactions = async (request: ListRequest<TransactionsFilter>) => {
  const params = { ...request.paging, ...request.filter };
  return httpClient.get<ListRequest<TransactionsFilter>, ListResponse<Transaction>>(baseUrl, {
    params,
  });
};
