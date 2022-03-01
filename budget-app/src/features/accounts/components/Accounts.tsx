import React, { FC } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { ListSeparator } from '@components';
import AccountsListItem from './AccountsListItem';
import { Account } from '../types';

interface Props {
  isRefreshing: boolean;
  onRefresh: () => void;
  data: Account[];
  onItemPress: (account: Account) => void;
}

const Accounts: FC<Props> = (props) => {
  const { isRefreshing, onRefresh, data, onItemPress } = props;

  const renderItem = (item: ListRenderItemInfo<Account>) => {
    const account = item.item;
    return <AccountsListItem onPress={() => onItemPress(account)} account={account} />;
  };

  return (
    <FlatList
      ItemSeparatorComponent={ListSeparator}
      refreshing={isRefreshing}
      onRefresh={onRefresh}
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
  );
};

export default Accounts;
