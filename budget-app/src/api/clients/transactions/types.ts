import { BaseModel } from '@api/types';
import { Category } from '@api/clients/categories/types';

export interface Transaction extends BaseModel {
  description: string;
  amount: number;
  date: string;
  category: Category;
}

export interface TransactionsFilter {
  amountFrom?: number;
  amountTo?: number;
  dateFrom?: string;
  dateTo?: string;
  accountId?: number;
}
