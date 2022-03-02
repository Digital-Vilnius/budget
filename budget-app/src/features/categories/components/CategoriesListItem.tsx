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
import { useTranslation } from 'react-i18next';
import { NumberUtils } from '@utils';
import CategoryIcon from './CategoryIcon';
import { Category, CategoryIconSize } from '../types';

export interface Props {
  onPress: () => void;
  category: Category;
  iconSize?: CategoryIconSize;
}

const CategoriesListItem: FC<Props> = (props) => {
  const { onPress, category, iconSize } = props;
  const { t } = useTranslation();
  const amountColor = category.balance < 0 ? colors.danger : colors.success;

  return (
    <TouchableOpacity style={[styles.container, row]} onPress={onPress}>
      <CategoryIcon style={rightSpacings.l} category={category} size={iconSize} />
      <View style={[flex1, rightPaddings.l]}>
        <Text style={styles.name}>{category.name}</Text>
        <Text style={styles.count}>
          {t('labels.transactions_count', { count: category.transactionsCount })}
        </Text>
      </View>
      <View>
        <Text style={[styles.amount, { color: amountColor }]}>
          {NumberUtils.formatNumber(category.balance)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: sizes.l,
  },
  name: {
    fontSize: fontSizes.s,
    lineHeight: lineHeights.m,
    fontFamily: fonts.primary.medium,
    color: colors.text.primary,
    letterSpacing: -0.2,
  },
  count: {
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.l,
    fontFamily: fonts.primary.medium,
    color: colors.text.secondary,
  },
  amount: {
    fontSize: fontSizes.m,
    lineHeight: lineHeights.xxl,
    fontFamily: fonts.primary.medium,
    letterSpacing: -0.2,
  },
});

export default CategoriesListItem;
