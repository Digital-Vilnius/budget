import { User as ApiUser } from '@api/clients/users/types';
import { User } from './types';

export const mapUser = (user: ApiUser): User => user;
