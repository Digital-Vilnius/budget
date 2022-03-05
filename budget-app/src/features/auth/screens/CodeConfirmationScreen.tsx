import React, { FC } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackParamList } from '@navigation/AuthNavigator';
import { CodeConfirmationRoute } from '@navigation/types';
import { CodeConfirmation } from '../hoc';

const CodeConfirmationScreen: FC<StackScreenProps<AuthStackParamList, CodeConfirmationRoute>> = (
  props
) => {
  const { route } = props;
  const { params } = route;

  return <CodeConfirmation phone={params.phone} />;
};

export default CodeConfirmationScreen;
