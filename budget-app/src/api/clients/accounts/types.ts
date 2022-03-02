import { BaseModel } from '@api/types';

export interface Account extends BaseModel {
  name: string;
  currency: string;
  balance: number;
  expenses: number;
  incomes: number;
}

export interface AccountsFilter {
  userId?: number;
}
