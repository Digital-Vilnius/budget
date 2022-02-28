import { BaseModel } from '@api/types';

export interface Category extends BaseModel {
  name: string;
}

export interface CategoryFormData {
  name: string;
  parentId?: number;
}
