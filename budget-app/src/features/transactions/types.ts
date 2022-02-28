import { BaseModel } from '@api/types';
import { Category } from '@features/categories/types';

export interface Transaction extends BaseModel {
  category: Category;
}
