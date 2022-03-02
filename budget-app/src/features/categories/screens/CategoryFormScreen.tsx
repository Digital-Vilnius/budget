import React, { FC } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { MainStackParamList } from '@navigation/MainNavigator';
import { CategoryFormRoute } from '@navigation/types';
import { CategoryForm } from '../hoc';

const CategoryFormScreen: FC<StackScreenProps<MainStackParamList, CategoryFormRoute>> = (props) => {
  const { route } = props;
  const { params } = route;

  return <CategoryForm id={params?.id} />;
};

export default CategoryFormScreen;
