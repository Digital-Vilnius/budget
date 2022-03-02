import { Control, Controller } from 'react-hook-form';
import { ConfirmCodeFormData } from '@features/auth/types';
import React, { FC } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { CodeInput } from '@components';

interface Props {
  control: Control<ConfirmCodeFormData>;
  onSubmit: () => void;
  style?: StyleProp<ViewStyle>;
}

const CodeConfirmationForm: FC<Props> = (props) => {
  const { control, style, onSubmit } = props;

  return (
    <View style={style}>
      <Controller
        control={control}
        name="code"
        render={({ field, fieldState: { error } }) => (
          <CodeInput
            onChange={(code) => {
              field.onChange(code);
              if (code.length === 4) onSubmit();
            }}
            value={field.value}
            error={error?.message}
          />
        )}
      />
    </View>
  );
};

export default CodeConfirmationForm;
