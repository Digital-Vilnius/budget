import { RegisterFormData } from '@features/auth/types';
import { registerAction } from '@features/auth/actions';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector } from '@core/store';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from '@navigation/AuthNavigator';
import { codeConfirmationRoute } from '@navigation/types';

const getSchema = () => {
  const schema = yup.object().shape({
    phone: yup.string().required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
  });

  return schema.required();
};

const initialFormData: RegisterFormData = {
  phone: '',
  firstName: '',
  lastName: '',
};

const useRegistrationForm = () => {
  const { isLoading } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();

  const { control, handleSubmit } = useForm<RegisterFormData>({
    defaultValues: initialFormData,
    resolver: yupResolver(getSchema()),
  });

  const register = async (request: RegisterFormData) => {
    await dispatch(registerAction(request)).unwrap();
    navigation.navigate(codeConfirmationRoute, { phone: request.phone });
  };

  return { register, isLoading, control, handleSubmit };
};

export default useRegistrationForm;
