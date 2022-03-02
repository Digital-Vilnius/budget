import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '@styles/constants';

export interface LinkProps {
  height?: number;
}

const ListSeparator: FC<LinkProps> = (props) => {
  const { height = 1 } = props;

  return <View style={[styles.separator, { height: height }]} />;
};

const styles = StyleSheet.create({
  separator: {
    backgroundColor: colors.grey.light,
  },
});

export default ListSeparator;
