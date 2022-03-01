import { LoginFormData } from '@features/auth/types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
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
    })
    .required();
};

const useLoginForm = () => {
  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();

  const { control, handleSubmit } = useForm<LoginFormData>({
    resolver: yupResolver(getSchema()),
  });

  const { mutateAsync, isLoading } = useMutation(AuthClient.login);

  const login = (data: LoginFormData) => {
    return mutateAsync(data, {
      onSuccess: () => navigation.navigate(codeConfirmationRoute, { phone: data.phone }),
    });
  };

  return {
    login,
    isLoading,
    control,
    handleSubmit,
  };
};

export default useLoginForm;
