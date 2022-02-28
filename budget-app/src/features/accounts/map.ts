import { Account as ApiAccount } from '@api/clients/accounts/types';
import { Account } from './types';

export const mapAccount = (account: ApiAccount): Account => account;
