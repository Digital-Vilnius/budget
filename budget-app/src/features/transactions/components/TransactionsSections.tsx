import React, { FC } from 'react';
import { ListRenderItemInfo, SectionList, StyleProp, ViewStyle } from 'react-native';
import { ListSeparator } from '@components';
import { mapTransactionsSections } from '@features/transactions/map';
import TransactionsListItem from './TransactionsListItem';
import TransactionsSectionHeader from './TransactionsSectionHeader';
import { Transaction } from '../types';

interface Props {
  data: Transaction[];
  onItemPress: (transactions: Transaction) => void;
  style?: StyleProp<ViewStyle>;
  isRefreshing?: boolean;
  onRefresh?: () => void;
  onEndReached?: () => void;
}

const TransactionsSections: FC<Props> = (props) => {
  const { isRefreshing, onRefresh, data, onEndReached, onItemPress, style } = props;

  const renderItem = (item: ListRenderItemInfo<Transaction>) => {
    const transaction = item.item;
    return <TransactionsListItem onPress={() => onItemPress(transaction)} item={transaction} />;
  };

  return (
    <SectionList
      renderSectionHeader={TransactionsSectionHeader}
      ItemSeparatorComponent={ListSeparator}
      contentContainerStyle={style}
      refreshing={isRefreshing}
      onRefresh={onRefresh}
      sections={mapTransactionsSections(data)}
      onEndReached={onEndReached}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
  );
};

export default TransactionsSections;
