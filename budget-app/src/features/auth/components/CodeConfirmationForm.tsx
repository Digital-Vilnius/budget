import { Control, Controller } from 'react-hook-form';
import { ConfirmCodeFormData } from '@features/auth/types';
import React, { FC } from 'react';
import { View } from 'react-native';
import { Button, Input } from '@components';
import { useTranslation } from 'react-i18next';
import { bottomSpacings, paddings } from '@styles/constants';

interface Props {
  onSubmit: () => void;
  control: Control<ConfirmCodeFormData>;
  isLoading: boolean;
}

const CodeConfirmationForm: FC<Props> = (props) => {
  const { onSubmit, control, isLoading } = props;
  const { t } = useTranslation();

  return (
    <View style={paddings.m}>
      <Controller
        control={control}
        name="code"
        render={({ field, fieldState: { error } }) => (
          <Input
            style={bottomSpacings.xs}
            placeholder={t('labels.code')}
            onBlur={field.onBlur}
            onChange={field.onChange}
            value={field.value}
            error={error?.message}
          />
        )}
      />
      <Button isLoading={isLoading} label={t('buttons.confirm')} onPress={onSubmit} />
    </View>
  );
};

export default CodeConfirmationForm;
