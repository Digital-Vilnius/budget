import React, { FC } from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { CategoryFormScreen, CategoryScreen } from '@features/categories/screens';
import { TransactionFormScreen, TransactionScreen } from '@features/transactions/screens';
import { UserFormScreen, UserScreen } from '@features/users/screens';
import DrawerNavigator from '@navigation/DrawerNavigator';
import {
  categoryFormRoute,
  categoryRoute,
  drawerNavigator,
  transactionFormRoute,
  transactionRoute,
  userFormRoute,
  userRoute,
} from './types';

export type MainStackParamList = {
  [categoryRoute]: { id: number };
  [categoryFormRoute]: { id?: number };
  [transactionRoute]: { id: number };
  [transactionFormRoute]: { id?: number };
  [userRoute]: { id: number };
  [userFormRoute]: { id?: number };
  [drawerNavigator]: undefined;
};

const MainStack = createStackNavigator<MainStackParamList>();

const screenOptions: StackNavigationOptions = {
  headerShown: true,
};

const MainNavigator: FC = () => {
  return (
    <MainStack.Navigator initialRouteName={drawerNavigator} screenOptions={screenOptions}>
      <MainStack.Screen name={drawerNavigator} component={DrawerNavigator} />
      <MainStack.Screen name={categoryRoute} component={CategoryScreen} />
      <MainStack.Screen name={categoryFormRoute} component={CategoryFormScreen} />
      <MainStack.Screen name={transactionRoute} component={TransactionScreen} />
      <MainStack.Screen name={transactionFormRoute} component={TransactionFormScreen} />
      <MainStack.Screen name={userRoute} component={UserScreen} />
      <MainStack.Screen name={userFormRoute} component={UserFormScreen} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
