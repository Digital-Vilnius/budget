import { BaseModel } from '@api/types';
import { Category } from '@features/categories/types';

export interface Transaction extends BaseModel {
  category: Category;
  amount: number;
  date: string;
  time: string;
  description: string;
}

export interface TransactionsSection {
  title: string;
  data: Transaction[];
}
