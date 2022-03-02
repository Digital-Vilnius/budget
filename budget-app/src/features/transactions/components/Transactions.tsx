import React, { FC } from 'react';
import { FlatList, ListRenderItemInfo, StyleProp, ViewStyle } from 'react-native';
import { ListSeparator } from '@components';
import TransactionsListItem from './TransactionsListItem';
import { Transaction } from '../types';

interface Props {
  data: Transaction[];
  onItemPress: (transactions: Transaction) => void;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  isRefreshing?: boolean;
  onRefresh?: () => void;
  onEndReached?: () => void;
}

const TransactionsSections: FC<Props> = (props) => {
  const { isRefreshing, onRefresh, data, onEndReached, onItemPress, contentStyle, style } = props;

  const renderItem = (item: ListRenderItemInfo<Transaction>) => {
    const transaction = item.item;
    return <TransactionsListItem onPress={() => onItemPress(transaction)} item={transaction} />;
  };

  return (
    <FlatList
      style={style}
      ItemSeparatorComponent={ListSeparator}
      contentContainerStyle={contentStyle}
      refreshing={isRefreshing}
      onRefresh={onRefresh}
      data={data}
      onEndReached={onEndReached}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
  );
};

export default TransactionsSections;
