import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Category } from '../types';

export interface Props {
  onPress: () => void;
  category: Category;
}

const CategoriesListItem: FC<Props> = (props) => {
  const { onPress, category } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{category.name}</Text>
    </TouchableOpacity>
  );
};

export default CategoriesListItem;
