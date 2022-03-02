import { BaseModel } from '@api/types';

export interface Category extends BaseModel {
  name: string;
  color: string;
  transactionsCount: number;
  balance: number;
}

export interface CategoryFormData {
  name: string;
  parentId?: number;
}

export type CategoryIconSize = 's' | 'm' | 'l';
