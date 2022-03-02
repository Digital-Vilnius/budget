import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '@navigation/MainNavigator';
import { categoryRoute } from '@navigation/types';
import { sizes } from '@styles/constants';
import { StyleSheet } from 'react-native';
import { CategoriesList } from '../components';
import { useCategories } from '../hooks';
import { Category } from '../types';

const Categories: FC = () => {
  const { categories, isLoading, isRefetching, refetch } = useCategories();
  const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();

  const handleItemPress = (category: Category) => {
    navigation.navigate(categoryRoute, { id: category.id });
  };

  return (
    <CategoriesList
      data={categories}
      onRefresh={refetch}
      contentStyle={styles.content}
      isRefreshing={isLoading || isRefetching}
      onItemPress={handleItemPress}
    />
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: sizes.xl,
    paddingBottom: sizes.l,
  },
});

export default Categories;
