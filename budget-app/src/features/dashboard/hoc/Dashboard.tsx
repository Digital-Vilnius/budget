import React, { FC } from 'react';
import { useRecentCategories } from '@features/categories/hooks';
import { useRecentTransactions } from '@features/transactions/hooks';
import { useAccount } from '@features/accounts/hooks';
import { useAppSelector } from '@core/store';
import { RefreshControl, ScrollView, StyleSheet, View } from 'react-native';
import { ListSeparator } from '@components';
import { borderRadius, colors, paddings, sizes } from '@styles/constants';
import { Categories, QuickActions, RecentTransactions, Statistics } from '../components';

const Dashboard: FC = () => {
  const selectedAccount = useAppSelector((state) => state.accounts.selectedAccount);
  if (!selectedAccount) throw new Error('Account is not set');

  const {
    categories,
    count: categoriesCount,
    refetch: refetchCategories,
    isRefetching: isCategoriesRefetching,
    isLoading: isCategoriesLoading,
  } = useRecentCategories();

  const {
    transactions,
    count: transactionsCount,
    refetch: refetchTransactions,
    isRefetching: isTransactionsRefetching,
    isLoading: isTransactionsLoading,
  } = useRecentTransactions();

  const {
    refetch: refetchAccount,
    isRefetching: isAccountRefetching,
    isLoading: isAccountLoading,
  } = useAccount({ id: selectedAccount.id });

  const handleRefetch = () => {
    refetchCategories();
    refetchTransactions();
    refetchAccount();
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={
            isCategoriesRefetching ||
            isTransactionsRefetching ||
            isAccountRefetching ||
            isCategoriesLoading ||
            isTransactionsLoading ||
            isAccountLoading
          }
          onRefresh={handleRefetch}
        />
      }
    >
      <Statistics
        style={styles.chartContainer}
        incomes={selectedAccount.incomes}
        balance={selectedAccount.balance}
        expenses={selectedAccount.expenses}
      />
      <QuickActions style={paddings.l} />
      <View style={styles.content}>
        <Categories style={paddings.xl} categoriesCount={categoriesCount} categories={categories} />
        <ListSeparator />
        <RecentTransactions
          style={paddings.xl}
          transactionsCount={transactionsCount}
          transactions={transactions}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: colors.white,
    borderTopRightRadius: borderRadius.xxl,
    borderTopLeftRadius: borderRadius.xxl,
  },
  chartContainer: {
    paddingTop: sizes.xxl,
    paddingHorizontal: sizes.xl,
    paddingBottom: sizes.l,
  },
});

export default Dashboard;
