import React, { FC } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { ListSeparator } from '@components';
import CategoriesListItem from './CategoriesListItem';
import { Category } from '../types';

interface Props {
  isRefreshing: boolean;
  onRefresh: () => void;
  data: Category[];
  onEndReached: () => void;
  onItemPress: (category: Category) => void;
}

const Categories: FC<Props> = (props) => {
  const { isRefreshing, onRefresh, data, onEndReached, onItemPress } = props;

  const renderItem = (item: ListRenderItemInfo<Category>) => {
    const category = item.item;
    return <CategoriesListItem onPress={() => onItemPress(category)} category={category} />;
  };

  return (
    <FlatList
      ItemSeparatorComponent={ListSeparator}
      refreshing={isRefreshing}
      onRefresh={onRefresh}
      data={data}
      onEndReached={onEndReached}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
  );
};

export default Categories;
