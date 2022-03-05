import { Control, Controller } from 'react-hook-form';
import { TransactionFormData } from '@features/transactions/types';
import React, { FC } from 'react';
import { RefreshControl, ScrollView, StyleProp, ViewStyle } from 'react-native';
import { Input } from '@components';
import { bottomSpacings } from '@styles/constants';
import { useTranslation } from 'react-i18next';

interface Props {
  control: Control<TransactionFormData>;
  onSubmit: () => void;
  isSubmitting: boolean;
  isRefreshing: boolean;
  onRefresh: () => void;
  contentStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
}

const TransactionForm: FC<Props> = (props) => {
  const { control, contentStyle, style, isRefreshing, onRefresh } = props;
  const { t } = useTranslation();

  return (
    <ScrollView
      refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />}
      contentContainerStyle={contentStyle}
      style={style}
    >
      <Controller
        control={control}
        name="amount"
        render={({ field, fieldState: { error } }) => (
          <Input
            label={t('labels.amount')}
            style={bottomSpacings.m}
            onBlur={field.onBlur}
            onChange={field.onChange}
            value={field.value?.toString()}
            error={error?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="description"
        render={({ field, fieldState: { error } }) => (
          <Input
            multiline
            numberOfLines={4}
            label={t('labels.description')}
            style={bottomSpacings.xs}
            onBlur={field.onBlur}
            onChange={field.onChange}
            value={field.value}
            error={error?.message}
          />
        )}
      />
    </ScrollView>
  );
};

export default TransactionForm;
