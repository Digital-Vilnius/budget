import { ConfirmCodeFormData } from '@features/auth/types';
import { confirmCodeAction } from '@features/auth/actions';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAppDispatch, useAppSelector } from '@core/store';

const getSchema = () => {
  const schema = yup.object().shape({
    code: yup.string().required(),
  });

  return schema.required();
};

const initialFormData: ConfirmCodeFormData = {
  code: '',
};

interface Props {
  phone: string;
}

const useCodeConfirmationForm = (props: Props) => {
  const { phone } = props;
  const { isLoading } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const { control, handleSubmit } = useForm<ConfirmCodeFormData>({
    defaultValues: initialFormData,
    resolver: yupResolver(getSchema()),
  });

  const confirmCode = (request: ConfirmCodeFormData) => {
    return dispatch(confirmCodeAction({ ...request, phone })).unwrap();
  };

  return { confirmCode, isLoading, control, handleSubmit };
};

export default useCodeConfirmationForm;
