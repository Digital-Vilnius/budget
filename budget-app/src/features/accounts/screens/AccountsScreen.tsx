import React, { FC } from 'react';
import { ScreenContainer } from '@components';
import { StackScreenProps } from '@react-navigation/stack';
import { MainStackParamList } from '@navigation/MainNavigator';
import { AccountsRoute, drawerNavigator } from '@navigation/types';
import { Accounts } from '../hoc';

const AccountsScreen: FC<StackScreenProps<MainStackParamList, AccountsRoute>> = (props) => {
  const { navigation } = props;

  const handleOnAccountSelect = () => {
    navigation.navigate(drawerNavigator);
  };

  return (
    <ScreenContainer>
      <Accounts onAccountSelect={handleOnAccountSelect} />
    </ScreenContainer>
  );
};

export default AccountsScreen;
