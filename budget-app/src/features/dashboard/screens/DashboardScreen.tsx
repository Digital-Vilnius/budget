import React, { FC } from 'react';
import { ScreenContainer } from '@components';
import { Dashboard } from '../hoc';

const DashboardScreen: FC = () => {
  return (
    <ScreenContainer>
      <Dashboard />
    </ScreenContainer>
  );
};

export default DashboardScreen;
