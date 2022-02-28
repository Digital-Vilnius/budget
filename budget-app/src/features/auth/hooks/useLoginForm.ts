import { LoginFormData } from '@features/auth/types';
import { loginAction } from '@features/auth/actions';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAppDispatch, useAppSelector } from '@core/store';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from '@navigation/AuthNavigator';
import { codeConfirmationRoute } from '@navigation/types';

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
  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();

  const { control, handleSubmit } = useForm<LoginFormData>({
    defaultValues: initialFormData,
    resolver: yupResolver(getSchema()),
  });

  const login = async (request: LoginFormData) => {
    await dispatch(loginAction(request)).unwrap();
    navigation.navigate(codeConfirmationRoute, { phone: request.phone });
  };

  return { login, isLoading, control, handleSubmit };
};

export default useLoginForm;
