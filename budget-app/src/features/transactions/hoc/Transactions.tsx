import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '@navigation/MainNavigator';
import { transactionRoute } from '@navigation/types';
import { Transaction } from '@features/transactions/types';
import { StyleSheet } from 'react-native';
import { sizes } from '@styles/constants';
import { TransactionsSections as ControlledTransactions } from '../components';
import { useTransactions } from '../hooks';

const Transactions: FC = () => {
  const { transactions, isLoading, loadMore, isRefetching, refetch } = useTransactions();
  const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();

  const handleItemPress = (transaction: Transaction) => {
    navigation.navigate(transactionRoute, { id: transaction.id });
  };

  return (
    <ControlledTransactions
      data={transactions}
      style={styles.content}
      onRefresh={refetch}
      isRefreshing={isLoading || isRefetching}
      onItemPress={handleItemPress}
      onEndReached={loadMore}
    />
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: sizes.xl,
    paddingBottom: sizes.l,
  },
});

export default Transactions;
