import React, { FC } from 'react';
import { ScreenContainer } from '@components';
import { Settings } from '../hoc';

const SettingsScreen: FC = () => {
  return (
    <ScreenContainer>
      <Settings />
    </ScreenContainer>
  );
};

export default SettingsScreen;
