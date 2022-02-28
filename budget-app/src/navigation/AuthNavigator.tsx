import React, { FC } from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { CodeConfirmationScreen, LoginScreen, RegistrationScreen } from '@features/auth/screens';
import { codeConfirmationRoute, loginRoute, registrationRoute } from './types';

export type AuthStackParamList = {
  [loginRoute]: undefined;
  [registrationRoute]: undefined;
  [codeConfirmationRoute]: { phone: string };
};

const AuthStack = createStackNavigator<AuthStackParamList>();

const screenOptions: StackNavigationOptions = {
  headerShown: true,
};

const AuthNavigator: FC = () => {
  return (
    <AuthStack.Navigator screenOptions={screenOptions}>
      <AuthStack.Screen name={loginRoute} component={LoginScreen} />
      <AuthStack.Screen name={codeConfirmationRoute} component={CodeConfirmationScreen} />
      <AuthStack.Screen name={registrationRoute} component={RegistrationScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
