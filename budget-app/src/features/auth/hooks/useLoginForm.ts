import { LoginFormData } from '@features/auth/types';
import { loginAction } from '@features/auth/actions';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAppDispatch, useAppSelector } from '@core/store';

const getSchema = () => {
  const schema = yup.object().shape({
    phone: yup.string().required(),
  });

  return schema.required();
};

const initialFormData: LoginFormData = {
  phone: '',
};

const useLoginForm = () => {
  const { isLoading } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const { control, handleSubmit } = useForm<LoginFormData>({
    defaultValues: initialFormData,
    resolver: yupResolver(getSchema()),
  });

  const login = (request: LoginFormData) => {
    return dispatch(loginAction(request)).unwrap();
  };

  return { login, isLoading, control, handleSubmit };
};

export default useLoginForm;