import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '@navigation/MainNavigator';
import { categoryRoute } from '@navigation/types';
import { Categories as ControlledCategories } from '../components';
import { useCategories } from '../hooks';
import { Category } from '../types';

const Categories: FC = () => {
  const { categories, isLoading, loadMore, isRefetching, refetch } = useCategories();
  const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();

  const handleItemPress = (category: Category) => {
    navigation.navigate(categoryRoute, { id: category.id });
  };

  return (
    <ControlledCategories
      data={categories}
      onRefresh={refetch}
      isRefreshing={isLoading || isRefetching}
      onItemPress={handleItemPress}
      onEndReached={loadMore}
    />
  );
};

export default Categories;
