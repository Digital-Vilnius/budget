import React, { FC } from 'react';
import { View } from 'react-native';
import { Category as CategoryType } from '../types';

interface Props {
  category: CategoryType;
}

const Category: FC<Props> = () => {
  return <View />;
};

export default Category;
