import React, { FC } from 'react';
import { FlatList, ListRenderItemInfo, StyleProp, ViewStyle } from 'react-native';
import { ListSeparator } from '@components';
import CategoriesListItem from './CategoriesListItem';
import { Category } from '../types';

interface Props {
  data: Category[];
  isRefreshing?: boolean;
  onRefresh?: () => void;
  onItemPress: (category: Category) => void;
  contentStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
}

const CategoriesList: FC<Props> = (props) => {
  const { isRefreshing, onRefresh, data, onItemPress, contentStyle, style } = props;

  const renderItem = (item: ListRenderItemInfo<Category>) => {
    const category = item.item;

    return (
      <CategoriesListItem onPress={() => onItemPress(category)} iconSize="s" category={category} />
    );
  };

  return (
    <FlatList
      style={style}
      ItemSeparatorComponent={ListSeparator}
      contentContainerStyle={contentStyle}
      refreshing={isRefreshing}
      onRefresh={onRefresh}
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
  );
};

export default CategoriesList;
