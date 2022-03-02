import React, { FC } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { center } from '@styles/styles';
import { StringUtils } from '@utils';
import { borderRadius, fonts, fontSizes, lineHeights } from '@styles/constants';
import hexToRgba from 'hex-to-rgba';
import { Category, CategoryIconSize } from '../types';

interface Props {
  category: Category;
  size?: CategoryIconSize;
  style?: StyleProp<ViewStyle>;
}

const CategoryIcon: FC<Props> = (props) => {
  const { category, style, size = 's' } = props;

  const backgroundColor = hexToRgba(category.color, 0.3);
  const dimension = size === 's' ? 40 : 65;
  const fontSize = size === 's' ? fontSizes.l : fontSizes.xl;

  return (
    <View
      style={[
        center,
        styles.container,
        { width: dimension, height: dimension, backgroundColor },
        style,
      ]}
    >
      <Text style={[styles.initials, { color: category.color, fontSize }]}>
        {StringUtils.getInitials(category.name)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: borderRadius.m,
  },
  initials: {
    fontFamily: fonts.primary.bold,
    lineHeight: lineHeights.xl,
  },
});

export default CategoryIcon;
