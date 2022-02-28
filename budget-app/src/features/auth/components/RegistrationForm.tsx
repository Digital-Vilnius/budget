import { Control, Controller } from 'react-hook-form';
import { RegisterFormData } from '@features/auth/types';
import React, { FC } from 'react';
import { View } from 'react-native';
import { Button, Input } from '@components';
import { useTranslation } from 'react-i18next';
import { bottomSpacings, paddings } from '@styles/constants';

interface Props {
  onSubmit: () => void;
  control: Control<RegisterFormData>;
  isLoading: boolean;
}

const RegistrationForm: FC<Props> = (props) => {
  const { onSubmit, control, isLoading } = props;
  const { t } = useTranslation();

  return (
    <View style={paddings.m}>
      <Controller
        control={control}
        name="phone"
        render={({ field, fieldState: { error } }) => (
          <Input
            style={bottomSpacings.xs}
            placeholder={t('labels.phone')}
            onBlur={field.onBlur}
            onChange={field.onChange}
            value={field.value}
            error={error?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="firstName"
        render={({ field, fieldState: { error } }) => (
          <Input
            style={bottomSpacings.xs}
            placeholder={t('labels.first_name')}
            onBlur={field.onBlur}
            onChange={field.onChange}
            value={field.value}
            error={error?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="lastName"
        render={({ field, fieldState: { error } }) => (
          <Input
            style={bottomSpacings.xs}
            placeholder={t('labels.last_name')}
            onBlur={field.onBlur}
            onChange={field.onChange}
            value={field.value}
            error={error?.message}
          />
        )}
      />
      <Button isLoading={isLoading} label={t('buttons.register')} onPress={onSubmit} />
    </View>
  );
};

export default RegistrationForm;
