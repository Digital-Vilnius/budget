import React, { FC } from 'react';
import { Control, Controller } from 'react-hook-form';
import { bottomSpacings, paddings } from '@styles/constants';
import { Button, Input } from '@components';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { CategoryFormData } from '../types';

interface Props {
  onSubmit: () => void;
  isLoading: boolean;
  control: Control<CategoryFormData>;
}

const CategoryForm: FC<Props> = (props) => {
  const { onSubmit, control, isLoading } = props;
  const { t } = useTranslation();

  return (
    <View style={paddings.m}>
      <Controller
        control={control}
        name="name"
        render={({ field, fieldState: { error } }) => (
          <Input
            style={bottomSpacings.xs}
            placeholder={t('labels.name')}
            onBlur={field.onBlur}
            onChange={field.onChange}
            value={field.value}
            error={error?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="parentId"
        render={({ field, fieldState: { error } }) => (
          <Input
            style={bottomSpacings.xs}
            placeholder={t('labels.parent')}
            onBlur={field.onBlur}
            onChange={field.onChange}
            value={field.value?.toString() ?? ''}
            error={error?.message}
          />
        )}
      />
      <Button isLoading={isLoading} label={t('buttons.save')} onPress={onSubmit} />
    </View>
  );
};

export default CategoryForm;
