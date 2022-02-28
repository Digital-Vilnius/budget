import React, { FC } from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { CategoriesScreen } from '@features/categories/screens';
import { TransactionsScreen } from '@features/transactions/screens';
import { SettingsScreen } from '@features/settings/screens';
import { UsersScreen } from '@features/users/screens';
import { ProfileScreen } from '@features/profile/screens';
import { DashboardScreen } from '@features/dashboard/screens';
import {
  categoriesRoute,
  dashboardRoute,
  profileRoute,
  settingsRoute,
  transactionsRoute,
  usersRoute,
} from './types';

export type TabsParamList = {
  [dashboardRoute]: undefined;
  [transactionsRoute]: undefined;
  [categoriesRoute]: undefined;
  [settingsRoute]: undefined;
  [usersRoute]: undefined;
  [profileRoute]: undefined;
};

const Tabs = createBottomTabNavigator<TabsParamList>();

const screenOptions: BottomTabNavigationOptions = {
  headerShown: true,
};

const TabsNavigator: FC = () => {
  return (
    <Tabs.Navigator initialRouteName={dashboardRoute} screenOptions={screenOptions}>
      <Tabs.Screen name={dashboardRoute} component={DashboardScreen} />
      <Tabs.Screen name={transactionsRoute} component={TransactionsScreen} />
      <Tabs.Screen name={categoriesRoute} component={CategoriesScreen} />
      <Tabs.Screen name={usersRoute} component={UsersScreen} />
      <Tabs.Screen name={settingsRoute} component={SettingsScreen} />
      <Tabs.Screen name={profileRoute} component={ProfileScreen} />
    </Tabs.Navigator>
  );
};

export default TabsNavigator;
