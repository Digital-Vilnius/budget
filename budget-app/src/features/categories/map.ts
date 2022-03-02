import { Category as ApiCategory } from '@api/clients/categories/types';
import { Category, CategoryFormData } from './types';

export const mapCategory = (category: ApiCategory): Category => category;

export const mapCategoryFormData = (category: ApiCategory): CategoryFormData => category;
