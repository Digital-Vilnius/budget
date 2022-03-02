import React, { FC } from 'react';
import { useRecentCategories } from '@features/categories/hooks';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '@navigation/MainNavigator';
import {
  categoriesRoute,
  categoryFormRoute,
  categoryRoute,
  transactionFormRoute,
  transactionRoute,
  transactionsRoute,
} from '@navigation/types';
import { useRecentTransactions } from '@features/transactions/hooks';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabsParamList } from '@navigation/TabsNavigator';
import { useAccount } from '@features/accounts/hooks';
import { useAppSelector } from '@core/store';
import { Dashboard as ControlledDashboard } from '../components';

const Dashboard: FC = () => {
  const stackNavigation = useNavigation<StackNavigationProp<MainStackParamList>>();
  const tabsNavigation = useNavigation<BottomTabNavigationProp<TabsParamList>>();
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
    account,
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
    <ControlledDashboard
      refresh={handleRefetch}
      isRefreshing={
        isCategoriesRefetching ||
        isTransactionsRefetching ||
        isAccountRefetching ||
        isCategoriesLoading ||
        isTransactionsLoading ||
        isAccountLoading
      }
      transactions={transactions}
      isShowAllTransactionsVisible={transactionsCount > transactions.length}
      onShowAllTransactionsPress={() => tabsNavigation.navigate(transactionsRoute)}
      onTransactionPress={(item) => stackNavigation.navigate(transactionRoute, { id: item.id })}
      categories={categories}
      isShowAllCategoriesVisible={categoriesCount > categories.length}
      onShowAllCategoriesPress={() => tabsNavigation.navigate(categoriesRoute)}
      onCategoryPress={(item) => stackNavigation.navigate(categoryRoute, { id: item.id })}
      onAddCategoryPress={() => stackNavigation.navigate(categoryFormRoute)}
      onAddTransactionPress={() => stackNavigation.navigate(transactionFormRoute)}
      onInviteUserPress={console.log}
      incomes={account?.incomes ?? selectedAccount.incomes}
      balance={account?.balance ?? selectedAccount.balance}
      expenses={account?.expenses ?? selectedAccount.expenses}
    />
  );
};

export default Dashboard;
