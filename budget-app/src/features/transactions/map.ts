import { Transaction as ApiTransaction } from '@api/clients/transactions/types';
import groupBy from 'lodash/groupBy';
import sortBy from 'lodash/sortBy';
import { DateUtils } from '@utils';
import { Transaction, TransactionFormData, TransactionsSection } from './types';

export const mapTransaction = (transaction: ApiTransaction): Transaction => ({
  ...transaction,
  date: DateUtils.formatDate(transaction.date),
  time: DateUtils.formatTime(transaction.date),
});

export const mapTransactionFormData = (transaction: ApiTransaction): TransactionFormData => ({
  amount: transaction.amount,
  date: transaction.date,
  description: transaction.description,
  categoryId: transaction.category.id,
  ownerId: transaction.owner?.id,
});

export const mapTransactionsSections = (transactions: Transaction[]): TransactionsSection[] => {
  const groups = groupBy(transactions, 'date');
  const sections: TransactionsSection[] = [];

  Object.keys(groups).forEach((date) => {
    const data = sortBy(groups[date], 'date', 'time').reverse();
    sections.push({ title: date, data });
  });

  return sections;
};
