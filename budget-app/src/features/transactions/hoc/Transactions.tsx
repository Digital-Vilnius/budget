import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '@navigation/MainNavigator';
import { transactionRoute } from '@navigation/types';
import { Transaction } from '@features/transactions/types';
import { StyleSheet, View } from 'react-native';
import { colors, sizes } from '@styles/constants';
import { TransactionsSections as ControlledTransactions } from '../components';
import { useTransactions } from '../hooks';

const Transactions: FC = () => {
  const { transactions, isLoading, loadMore, isRefetching, refetch } = useTransactions();
  const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();

  const handleItemPress = (transaction: Transaction) => {
    navigation.navigate(transactionRoute, { id: transaction.id });
  };

  return (
    <View style={styles.container}>
      <ControlledTransactions
        data={transactions}
        style={styles.content}
        onRefresh={refetch}
        isRefreshing={isLoading || isRefetching}
        onItemPress={handleItemPress}
        onEndReached={loadMore}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal: sizes.xl,
    paddingBottom: sizes.l,
  },
});

export default Transactions;
