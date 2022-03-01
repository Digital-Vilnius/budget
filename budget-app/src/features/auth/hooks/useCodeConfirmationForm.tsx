import { ConfirmCodeFormData } from '@features/auth/types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useMutation } from 'react-query';
import { AuthClient } from '@api/clients';
import { useAppDispatch } from '@core/store';
import { setAuth } from '@features/auth/slice';

const getSchema = () => {
  return yup
    .object()
    .shape({
      code: yup.string().required(),
    })
    .required();
};

interface Props {
  phone: string;
}

const useCodeConfirmationForm = (props: Props) => {
  const { phone } = props;
  const dispatch = useAppDispatch();

  const { control, handleSubmit } = useForm<ConfirmCodeFormData>({
    resolver: yupResolver(getSchema()),
  });

  const mutationFn = (data: ConfirmCodeFormData) => {
    return AuthClient.confirmCode({ ...data, phone });
  };

  const { mutateAsync, isLoading } = useMutation(mutationFn);

  const confirmCode = async (data: ConfirmCodeFormData) => {
    await mutateAsync(data, {
      onSuccess: async (response) => {
        await dispatch(setAuth(response.result));
      },
    });
  };

  return {
    confirmCode,
    isLoading,
    control,
    handleSubmit,
  };
};

export default useCodeConfirmationForm;
