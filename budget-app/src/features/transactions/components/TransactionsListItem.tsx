import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
  colors,
  fonts,
  fontSizes,
  lineHeights,
  rightPaddings,
  rightSpacings,
  sizes,
} from '@styles/constants';
import { flex1, row } from '@styles/styles';
import { NumberUtils } from '@utils';
import { CategoryIcon } from '@features/categories/components';
import { Transaction } from '../types';

export interface Props {
  onPress: () => void;
  item: Transaction;
}

const TransactionsListItem: FC<Props> = (props) => {
  const { onPress, item } = props;
  const amountColor = item.amount < 0 ? colors.danger : colors.success;

  return (
    <TouchableOpacity style={[styles.container, row]} onPress={onPress}>
      <CategoryIcon style={rightSpacings.l} size="s" category={item.category} />
      <View style={[flex1, rightPaddings.l]}>
        <Text style={styles.name}>{item.category.name}</Text>
        <Text numberOfLines={1} style={styles.description}>
          {item.description}
        </Text>
      </View>
      <Text style={[styles.amount, { color: amountColor }]}>
        {NumberUtils.formatNumber(item.amount)}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: sizes.xl,
  },
  name: {
    fontSize: fontSizes.s,
    lineHeight: lineHeights.l,
    fontFamily: fonts.primary.medium,
    color: colors.text.primary,
  },
  description: {
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.l,
    fontFamily: fonts.primary.medium,
    color: colors.text.secondary,
    letterSpacing: -0.24,
  },
  amount: {
    fontSize: fontSizes.m,
    lineHeight: lineHeights.xxl,
    fontFamily: fonts.primary.medium,
    letterSpacing: -0.2,
  },
});

export default TransactionsListItem;
