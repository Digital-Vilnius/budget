import React, { FC } from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { CategoryFormScreen, CategoryScreen } from '@features/categories/screens';
import { TransactionFormScreen, TransactionScreen } from '@features/transactions/screens';
import { UserFormScreen, UserScreen } from '@features/users/screens';
import DrawerNavigator from '@navigation/DrawerNavigator';
import { useTranslation } from 'react-i18next';
import { ProfileScreen } from '@features/profile/screens';
import { AccountsScreen } from '@features/accounts/screens';
import { useAppSelector } from '@core/store';
import {
  cardStyle,
  headerLeftContainerStyle,
  headerRightContainerStyle,
  headerTitleStyle,
} from '@navigation/styles';
import { BackButton } from './components';
import {
  accountsRoute,
  categoryFormRoute,
  categoryRoute,
  drawerNavigator,
  profileRoute,
  transactionFormRoute,
  transactionRoute,
  userFormRoute,
  userRoute,
} from './types';

export type MainStackParamList = {
  [categoryRoute]: { id: number };
  [categoryFormRoute]: { id: number } | undefined;
  [transactionRoute]: { id: number };
  [transactionFormRoute]: { id: number } | undefined;
  [userRoute]: { id: number };
  [userFormRoute]: { id?: number };
  [accountsRoute]: undefined;
  [drawerNavigator]: undefined;
  [profileRoute]: undefined;
};

const MainStack = createStackNavigator<MainStackParamList>();

const screenOptions: StackNavigationOptions = {
  headerShown: true,
  cardStyle,
  headerShadowVisible: false,
  headerTitleAlign: 'center',
  headerTitleStyle,
  headerLeftContainerStyle,
  headerRightContainerStyle,
  headerLeft: ({ canGoBack }) => (canGoBack ? <BackButton /> : undefined),
};

const MainNavigator: FC = () => {
  const { t } = useTranslation();
  const selectedAccount = useAppSelector((state) => state.accounts.selectedAccount);

  return (
    <MainStack.Navigator
      initialRouteName={selectedAccount ? drawerNavigator : accountsRoute}
      screenOptions={screenOptions}
    >
      <MainStack.Screen
        options={{ title: t('titles.accounts') }}
        name={accountsRoute}
        component={AccountsScreen}
      />
      <MainStack.Screen
        options={{ headerShown: false }}
        name={drawerNavigator}
        component={DrawerNavigator}
      />
      <MainStack.Screen
        options={{ title: t('titles.category') }}
        name={categoryRoute}
        component={CategoryScreen}
      />
      <MainStack.Screen
        options={{ title: t('titles.category_form') }}
        name={categoryFormRoute}
        component={CategoryFormScreen}
      />
      <MainStack.Screen
        options={{ title: t('titles.transaction') }}
        name={transactionRoute}
        component={TransactionScreen}
      />
      <MainStack.Screen
        options={{ title: t('titles.transaction_form') }}
        name={transactionFormRoute}
        component={TransactionFormScreen}
      />
      <MainStack.Screen
        options={{ title: t('titles.user') }}
        name={userRoute}
        component={UserScreen}
      />
      <MainStack.Screen
        options={{ title: t('titles.user_form') }}
        name={userFormRoute}
        component={UserFormScreen}
      />
      <MainStack.Screen
        options={{ title: t('titles.profile') }}
        name={profileRoute}
        component={ProfileScreen}
      />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
