import { Transaction as ApiTransaction } from '@api/clients/transactions/types';
import { Transaction } from './types';

export const mapTransaction = (transaction: ApiTransaction): Transaction => transaction;
