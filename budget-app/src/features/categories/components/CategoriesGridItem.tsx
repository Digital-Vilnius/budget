import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { bottomSpacings, colors, fonts, fontSizes, lineHeights } from '@styles/constants';
import { center } from '@styles/styles';
import CategoryIcon from './CategoryIcon';
import { Category, CategoryIconSize } from '../types';

export interface Props {
  onPress: () => void;
  category: Category;
  iconSize?: CategoryIconSize;
}

const CategoriesGridItem: FC<Props> = (props) => {
  const { onPress, category, iconSize } = props;

  return (
    <TouchableOpacity style={center} onPress={onPress}>
      <CategoryIcon style={bottomSpacings.s} category={category} size={iconSize} />
      <Text style={styles.name}>{category.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.l,
    fontFamily: fonts.primary.medium,
    color: colors.text.primary,
  },
});

export default CategoriesGridItem;
