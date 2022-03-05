import React, { FC } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { TransactionFormRoute } from '@navigation/types';
import { MainStackParamList } from '@navigation/MainNavigator';
import { TransactionForm } from '../hoc';

const TransactionFormScreen: FC<StackScreenProps<MainStackParamList, TransactionFormRoute>> = (
  props
) => {
  const { route } = props;
  const { params } = route;

  return <TransactionForm id={params?.id} />;
};

export default TransactionFormScreen;
