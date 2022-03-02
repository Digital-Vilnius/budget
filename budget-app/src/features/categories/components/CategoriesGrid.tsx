import React, { FC } from 'react';
import { FlatList, ListRenderItemInfo, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import CategoriesGridItem from './CategoriesGridItem';
import CategoriesGridSeparator from './CategoriesGridSeparator';
import { Category, CategoryIconSize } from '../types';

interface Props {
  data: Category[];
  isRefreshing?: boolean;
  onRefresh?: () => void;
  iconSize?: CategoryIconSize;
  onItemPress: (category: Category) => void;
  contentStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
}

const CategoriesGrid: FC<Props> = (props) => {
  const { isRefreshing, onRefresh, data, onItemPress, iconSize, contentStyle, style } = props;

  const renderItem = (item: ListRenderItemInfo<Category>) => {
    const category = item.item;

    return (
      <CategoriesGridItem
        onPress={() => onItemPress(category)}
        iconSize={iconSize}
        category={category}
      />
    );
  };

  return (
    <FlatList
      style={style}
      ItemSeparatorComponent={CategoriesGridSeparator}
      contentContainerStyle={contentStyle}
      columnWrapperStyle={styles.columnWrapper}
      numColumns={4}
      refreshing={isRefreshing}
      onRefresh={onRefresh}
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  columnWrapper: {
    justifyContent: 'space-between',
  },
});

export default CategoriesGrid;
