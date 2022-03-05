import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '@navigation/MainNavigator';
import { categoryRoute } from '@navigation/types';
import { colors, paddings } from '@styles/constants';
import { StyleSheet, View } from 'react-native';
import { CategoriesGrid } from '../components';
import { useCategories } from '../hooks';
import { Category } from '../types';

const Categories: FC = () => {
  const { categories, isLoading, isRefetching, refetch } = useCategories();
  const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();

  const handleItemPress = (category: Category) => {
    navigation.navigate(categoryRoute, { id: category.id });
  };

  return (
    <View style={styles.container}>
      <CategoriesGrid
        iconSize="m"
        data={categories}
        onRefresh={refetch}
        contentStyle={paddings.xl}
        isRefreshing={isLoading || isRefetching}
        onItemPress={handleItemPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default Categories;
