import React, { FC } from 'react';
import { ScreenContainer } from '@components';
import { Registration } from '../hoc';

const RegistrationScreen: FC = () => {
  return (
    <ScreenContainer>
      <Registration />
    </ScreenContainer>
  );
};

export default RegistrationScreen;
