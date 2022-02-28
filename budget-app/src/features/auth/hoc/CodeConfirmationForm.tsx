import React, { FC } from 'react';
import { useCodeConfirmationForm } from '../hooks';
import { CodeConfirmationForm as ControlledCodeConfirmationForm } from '../components';

interface Props {
  phone: string;
}

const CodeConfirmationForm: FC<Props> = (props) => {
  const { phone } = props;
  const { isLoading, confirmCode, handleSubmit, control } = useCodeConfirmationForm({ phone });

  return (
    <ControlledCodeConfirmationForm
      isLoading={isLoading}
      control={control}
      onSubmit={handleSubmit(confirmCode)}
    />
  );
};

export default CodeConfirmationForm;
