import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '@navigation/MainNavigator';
import { drawerNavigator } from '@navigation/types';
import { useAppDispatch } from '@core/store';
import { setSelectedAccount } from '../slice';
import { Accounts as ControlledAccount } from '../components';
import { useAccounts } from '../hooks';
import { Account } from '../types';

const Accounts: FC = () => {
  const { accounts, isLoading, loadMore, isRefetching, refetch } = useAccounts();
  const dispatch = useAppDispatch();
  const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();

  const handleItemPress = (account: Account) => {
    dispatch(setSelectedAccount({ account }));
    navigation.navigate(drawerNavigator);
  };

  return (
    <ControlledAccount
      data={accounts}
      onRefresh={refetch}
      isRefreshing={isLoading || isRefetching}
      onItemPress={handleItemPress}
      onEndReached={loadMore}
    />
  );
};

export default Accounts;
