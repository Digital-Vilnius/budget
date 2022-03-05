import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TransactionFormData } from '@features/transactions/types';
import { useMutation } from 'react-query';
import { TransactionsClient } from '@api/clients';
import { transactionsRoute } from '@navigation/types';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabsParamList } from '@navigation/TabsNavigator';
import { useCallback, useEffect } from 'react';
import { mapTransactionFormData } from '@features/transactions/map';

const getSchema = () => {
  return yup
    .object()
    .shape({
      amount: yup.number().required(),
      description: yup.string().required(),
      date: yup.string().required(),
      categoryId: yup.number().integer().positive().required(),
      ownerId: yup.number().integer().positive().required(),
    })
    .required();
};

const useTransactionForm = (id?: number) => {
  const navigation = useNavigation<BottomTabNavigationProp<TabsParamList>>();

  const { control, handleSubmit, reset } = useForm<TransactionFormData>({
    resolver: yupResolver(getSchema()),
  });

  const setForm = useCallback(() => {
    if (id) {
      TransactionsClient.getTransaction(id).then((response) => {
        reset(mapTransactionFormData(response.result));
      });
    }
  }, [id, reset]);

  useEffect(() => {
    setForm();
  }, [setForm]);

  const mutationFn = async (data: TransactionFormData) => {
    if (id) await TransactionsClient.editTransaction(id, data);
    else await TransactionsClient.addTransaction(data);
  };

  const save = (data: TransactionFormData) => {
    return mutateAsync(data, {
      onSuccess: () => navigation.navigate(transactionsRoute),
    });
  };

  const { mutateAsync, isLoading } = useMutation(mutationFn);

  return {
    save,
    isLoading,
    control,
    handleSubmit,
  };
};

export default useTransactionForm;
