import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { colors, sizes } from '@styles/constants';

export interface LinkProps {
  height?: number;
}

const CategoriesGridSeparator: FC<LinkProps> = (props) => {
  const { height = sizes.xl } = props;

  return <View style={[styles.separator, { height: height }]} />;
};

const styles = StyleSheet.create({
  separator: {
    backgroundColor: 'transparent',
  },
});

export default CategoriesGridSeparator;
