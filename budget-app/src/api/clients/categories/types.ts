import { BaseModel } from '@api/types';

export interface Category extends BaseModel {
  name: string;
  description: string;
  parentId?: number;
}

export interface CategoriesFilter {
  keyword?: string;
  parentId?: number;
  accountId?: number;
}
