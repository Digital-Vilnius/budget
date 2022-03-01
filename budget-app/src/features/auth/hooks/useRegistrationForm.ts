import { RegisterFormData } from '@features/auth/types';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from '@navigation/AuthNavigator';
import { codeConfirmationRoute } from '@navigation/types';
import { useMutation } from 'react-query';
import { AuthClient } from '@api/clients';

const getSchema = () => {
  return yup
    .object()
    .shape({
      phone: yup.string().required(),
      firstName: yup.string().required(),
      lastName: yup.string().required(),
    })
    .required();
};

const useRegistrationForm = () => {
  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();

  const { control, handleSubmit } = useForm<RegisterFormData>({
    resolver: yupResolver(getSchema()),
  });

  const { mutateAsync, isLoading } = useMutation(AuthClient.register);

  const register = (data: RegisterFormData) => {
    return mutateAsync(data, {
      onSuccess: () => navigation.navigate(codeConfirmationRoute, { phone: data.phone }),
    });
  };

  return {
    register,
    isLoading,
    control,
    handleSubmit,
  };
};

export default useRegistrationForm;
