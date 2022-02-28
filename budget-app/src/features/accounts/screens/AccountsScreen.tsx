import React, { FC } from 'react';
import { ScreenContainer } from '@components';
import { Accounts } from '../hoc';

const AccountsScreen: FC = () => {
  return (
    <ScreenContainer>
      <Accounts />
    </ScreenContainer>
  );
};

export default AccountsScreen;
