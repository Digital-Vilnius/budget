import React, { FC } from 'react';
import { createDrawerNavigator, DrawerNavigationOptions } from '@react-navigation/drawer';
import { tabsNavigator } from './types';

export type DrawerParamList = {
  [tabsNavigator]: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const screenOptions: DrawerNavigationOptions = {
  headerShown: true,
};

const TabsNavigator: FC = () => {
  return (
    <Drawer.Navigator initialRouteName={tabsNavigator} screenOptions={screenOptions}>
      <Drawer.Screen name={tabsNavigator} component={TabsNavigator} />
    </Drawer.Navigator>
  );
};

export default TabsNavigator;
