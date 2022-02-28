import React, { FC } from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { authNavigator, mainNavigator } from './types';
import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';

export type RootStackParamList = {
  [authNavigator]: undefined;
  [mainNavigator]: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const screenOptions: StackNavigationOptions = {
  headerShown: false,
};

const RootNavigator: FC = () => {
  const isLoggedIn = false;

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={screenOptions}>
        {!isLoggedIn && <RootStack.Screen name={authNavigator} component={AuthNavigator} />}
        {isLoggedIn && <RootStack.Screen name={mainNavigator} component={MainNavigator} />}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
