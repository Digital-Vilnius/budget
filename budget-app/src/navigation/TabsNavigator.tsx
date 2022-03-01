import React, { FC } from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { CategoriesScreen } from '@features/categories/screens';
import { TransactionsScreen } from '@features/transactions/screens';
import { SettingsScreen } from '@features/settings/screens';
import { UsersScreen } from '@features/users/screens';
import { DashboardScreen } from '@features/dashboard/screens';
import {
  categoriesRoute,
  dashboardRoute,
  settingsRoute,
  transactionsRoute,
  usersRoute,
} from './types';
import { DrawerToggleButton } from './components';

export type TabsParamList = {
  [dashboardRoute]: undefined;
  [transactionsRoute]: undefined;
  [categoriesRoute]: undefined;
  [settingsRoute]: undefined;
  [usersRoute]: undefined;
};

const Tabs = createBottomTabNavigator<TabsParamList>();

const screenOptions: BottomTabNavigationOptions = {
  headerShown: true,
  headerLeft: () => <DrawerToggleButton />,
};

const TabsNavigator: FC = () => {
  return (
    <Tabs.Navigator initialRouteName={dashboardRoute} screenOptions={screenOptions}>
      <Tabs.Screen name={dashboardRoute} component={DashboardScreen} />
      <Tabs.Screen name={transactionsRoute} component={TransactionsScreen} />
      <Tabs.Screen name={categoriesRoute} component={CategoriesScreen} />
      <Tabs.Screen name={usersRoute} component={UsersScreen} />
      <Tabs.Screen name={settingsRoute} component={SettingsScreen} />
    </Tabs.Navigator>
  );
};

export default TabsNavigator;
