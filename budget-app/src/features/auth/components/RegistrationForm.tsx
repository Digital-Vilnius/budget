import { Control, Controller } from 'react-hook-form';
import { RegisterFormData } from '@features/auth/types';
import React, { FC } from 'react';
import { View } from 'react-native';
import { Input } from '@components';
import { useTranslation } from 'react-i18next';
import { bottomSpacings } from '@styles/constants';

interface Props {
  control: Control<RegisterFormData>;
}

const RegistrationForm: FC<Props> = (props) => {
  const { control } = props;
  const { t } = useTranslation();

  return (
    <View>
      <Controller
        control={control}
        name="phone"
        render={({ field, fieldState: { error } }) => (
          <Input
            label={t('labels.phone_number')}
            style={bottomSpacings.l}
            placeholder={t('labels.phone_number')}
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
            label={t('labels.first_name')}
            style={bottomSpacings.l}
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
            label={t('labels.last_name')}
            placeholder={t('labels.last_name')}
            onBlur={field.onBlur}
            onChange={field.onChange}
            value={field.value}
            error={error?.message}
          />
        )}
      />
    </View>
  );
};

export default RegistrationForm;
