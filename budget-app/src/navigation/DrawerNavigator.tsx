import React, { FC } from 'react';
import { createDrawerNavigator, DrawerNavigationOptions } from '@react-navigation/drawer';
import { tabsNavigator } from './types';
import TabsNavigator from './TabsNavigator';
import { DrawerContent } from './components';

export type DrawerParamList = {
  [tabsNavigator]: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const screenOptions: DrawerNavigationOptions = {
  headerShown: false,
};

const DrawerNavigator: FC = () => {
  return (
    <Drawer.Navigator
      initialRouteName={tabsNavigator}
      drawerContent={DrawerContent}
      screenOptions={screenOptions}
    >
      <Drawer.Screen name={tabsNavigator} component={TabsNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
