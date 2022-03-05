import React, { FC } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { CategoryRoute } from '@navigation/types';
import { MainStackParamList } from '@navigation/MainNavigator';
import { Category } from '../hoc';

const CategoryScreen: FC<StackScreenProps<MainStackParamList, CategoryRoute>> = (props) => {
  const { route } = props;
  const { params } = route;

  return <Category id={params.id} />;
};

export default CategoryScreen;
