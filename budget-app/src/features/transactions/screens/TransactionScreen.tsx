import React, { FC } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { TransactionRoute } from '@navigation/types';
import { MainStackParamList } from '@navigation/MainNavigator';
import { TransactionForm } from '../hoc';

const TransactionScreen: FC<StackScreenProps<MainStackParamList, TransactionRoute>> = (props) => {
  const { route } = props;
  const { params } = route;

  return <TransactionForm id={params.id} />;
};

export default TransactionScreen;
