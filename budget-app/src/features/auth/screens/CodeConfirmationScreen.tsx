import React, { FC } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackParamList } from '@navigation/AuthNavigator';
import { CodeConfirmationRoute } from '@navigation/types';
import { CodeConfirmationForm } from '../hoc';

const CodeConfirmationScreen: FC<StackScreenProps<AuthStackParamList, CodeConfirmationRoute>> = (
  props
) => {
  const { route } = props;
  const { params } = route;
  const { phone } = params;

  return <CodeConfirmationForm phone={phone} />;
};

export default CodeConfirmationScreen;
