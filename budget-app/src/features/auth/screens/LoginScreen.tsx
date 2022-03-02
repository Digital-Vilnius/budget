import React, { FC } from 'react';
import { ScreenContainer } from '@components';
import { Login } from '../hoc';

const LoginScreen: FC = () => {
  return (
    <ScreenContainer>
      <Login />
    </ScreenContainer>
  );
};

export default LoginScreen;
