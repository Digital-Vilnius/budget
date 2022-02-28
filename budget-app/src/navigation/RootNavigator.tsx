import React, { FC } from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useAppSelector } from '@core/store';
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
  const isLogged = useAppSelector((state) => state.auth.isLogged);

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={authNavigator} screenOptions={screenOptions}>
        {!isLogged && <RootStack.Screen name={authNavigator} component={AuthNavigator} />}
        {isLogged && <RootStack.Screen name={mainNavigator} component={MainNavigator} />}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
