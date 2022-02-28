import { Control, Controller } from 'react-hook-form';
import { LoginFormData } from '@features/auth/types';
import React, { FC } from 'react';
import { View } from 'react-native';
import { Button, Input } from '@components';
import { useTranslation } from 'react-i18next';
import { bottomSpacings, paddings } from '@styles/constants';

interface Props {
  onSubmit: () => void;
  control: Control<LoginFormData>;
  isLoading: boolean;
}

const LoginForm: FC<Props> = (props) => {
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
      <Button isLoading={isLoading} label={t('buttons.login')} onPress={onSubmit} />
    </View>
  );
};

export default LoginForm;
