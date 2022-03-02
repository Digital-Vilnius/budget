import { Transaction as ApiTransaction } from '@api/clients/transactions/types';
import groupBy from 'lodash/groupBy';
import sortBy from 'lodash/sortBy';
import { DateUtils } from '@utils';
import { Transaction, TransactionsSection } from './types';

export const mapTransaction = (transaction: ApiTransaction): Transaction => ({
  ...transaction,
  date: DateUtils.formatDate(transaction.date),
  time: DateUtils.formatTime(transaction.date),
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
