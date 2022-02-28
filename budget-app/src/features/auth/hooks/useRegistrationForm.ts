import { RegisterFormData } from '@features/auth/types';
import { registerAction } from '@features/auth/actions';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector } from '@core/store';

const getSchema = () => {
  const schema = yup.object().shape({
    phone: yup.string().required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    accountName: yup.string().required(),
  });

  return schema.required();
};

const initialFormData: RegisterFormData = {
  phone: '',
  accountName: '',
  firstName: '',
  lastName: '',
};

const useRegistrationForm = () => {
  const { isLoading } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const { control, handleSubmit } = useForm<RegisterFormData>({
    defaultValues: initialFormData,
    resolver: yupResolver(getSchema()),
  });

  const register = (request: RegisterFormData) => {
    return dispatch(registerAction(request)).unwrap();
  };

  return { register, isLoading, control, handleSubmit };
};

export default useRegistrationForm;
