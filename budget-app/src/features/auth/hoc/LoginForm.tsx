import React, { FC } from 'react';
import { useLoginForm } from '../hooks';
import { LoginForm as ControlledLoginForm } from '../components';

const LoginForm: FC = () => {
  const { isLoading, login, handleSubmit, control } = useLoginForm();

  return (
    <ControlledLoginForm isLoading={isLoading} control={control} onSubmit={handleSubmit(login)} />
  );
};

export default LoginForm;
