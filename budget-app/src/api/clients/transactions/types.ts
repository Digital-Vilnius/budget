import { BaseModel } from '@api/types';
import { Category } from '../categories/types';
import { User } from '../users/types';

export interface Transaction extends BaseModel {
  description: string;
  amount: number;
  date: string;
  category: Category;
  owner: User | null;
}

export interface TransactionsFilter {
  amountFrom?: number;
  amountTo?: number;
  dateFrom?: string;
  dateTo?: string;
  accountId?: number;
}

export interface SaveTransactionRequest {
  amount: number;
  description: string;
  date: string;
  categoryId: number;
  ownerId?: number;
}
