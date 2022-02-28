import { Category as ApiCategory } from '@api/clients/categories/types';
import { Category } from './types';

export const mapCategory = (category: ApiCategory): Category => category;
