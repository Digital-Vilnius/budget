import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { sizes } from '@styles/constants';
import { TransactionForm as ControlledTransactionForm } from '../components';
import { useTransactionForm } from '../hooks';

interface Props {
  id?: number;
}

const TransactionForm: FC<Props> = (props) => {
  const { id } = props;
  const { control, isLoading, save, handleSubmit } = useTransactionForm(id);

  return (
    <ControlledTransactionForm
      contentStyle={styles.content}
      isSubmitting={isLoading}
      isRefreshing={false}
      onRefresh={console.log}
      onSubmit={handleSubmit(save)}
      control={control}
    />
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: sizes.xl,
    paddingBottom: sizes.l,
  },
});

export default TransactionForm;
