import React, { FC } from 'react';
import { useRegistrationForm } from '../hooks';
import { RegistrationForm as ControlledRegistrationForm } from '../components';

const RegistrationForm: FC = () => {
  const { isLoading, register, handleSubmit, control } = useRegistrationForm();

  return (
    <ControlledRegistrationForm
      isLoading={isLoading}
      control={control}
      onSubmit={handleSubmit(register)}
    />
  );
};

export default RegistrationForm;
