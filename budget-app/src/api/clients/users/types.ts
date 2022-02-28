import { BaseModel } from '@api/types';

export interface User extends BaseModel {
  phone: string;
  firstName: string;
  lastName: string;
}

export interface UsersFilter {
  keyword?: string;
  accountId?: number;
}
