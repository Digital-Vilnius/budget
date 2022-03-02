import { BaseModel } from '@api/types';

export interface Category extends BaseModel {
  name: string;
  color: string;
  transactionsCount: number;
  balance: number;
  parentId?: number;
}

export interface CategoriesFilter {
  parentId?: number;
  accountId?: number;
}
