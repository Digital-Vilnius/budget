import React, { FC } from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { CodeConfirmationScreen, LoginScreen, RegistrationScreen } from '@features/auth/screens';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  return (
    <AuthStack.Navigator initialRouteName={loginRoute} screenOptions={screenOptions}>
      <AuthStack.Screen
        options={{ title: t('titles.login') }}
        name={loginRoute}
        component={LoginScreen}
      />
      <AuthStack.Screen
        options={{ title: t('titles.code_confirmation') }}
        name={codeConfirmationRoute}
        component={CodeConfirmationScreen}
      />
      <AuthStack.Screen
        options={{ title: t('titles.registration') }}
        name={registrationRoute}
        component={RegistrationScreen}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
