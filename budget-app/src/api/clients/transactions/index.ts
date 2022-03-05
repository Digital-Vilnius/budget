import { ListRequest, ListResponse, ResultResponse } from '@api/types';
import httpClient from '@api/httpClient';
import { SaveTransactionRequest, Transaction, TransactionsFilter } from './types';

const baseUrl = '/transactions';

export const getTransactions = async (request: ListRequest<TransactionsFilter>) => {
  const params = { ...request.paging, ...request.filter };
  return httpClient.get<ListRequest<TransactionsFilter>, ListResponse<Transaction>>(baseUrl, {
    params,
  });
};

export const editTransaction = async (id: number, request: SaveTransactionRequest) => {
  return httpClient.post<SaveTransactionRequest, ResultResponse<Transaction>>(
    `${baseUrl}/${id}`,
    request
  );
};

export const getTransaction = async (id: number) => {
  return httpClient.get<void, ResultResponse<Transaction>>(`${baseUrl}/${id}`);
};

export const addTransaction = async (request: SaveTransactionRequest) => {
  return httpClient.post<SaveTransactionRequest, ResultResponse<Transaction>>(baseUrl, request);
};
