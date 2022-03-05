import React, { FC } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { bottomSpacings, colors, fonts, fontSizes } from '@styles/constants';
import { useTranslation } from 'react-i18next';
import { NumberUtils } from '@utils';
import { center, row } from '@styles/styles';

interface Props {
  balance: number;
  incomes: number;
  expenses: number;
  style?: StyleProp<ViewStyle>;
}

const Statistics: FC<Props> = (props) => {
  const { balance, style, incomes, expenses } = props;

  const { t } = useTranslation();
  const balanceColor = balance > 0 ? colors.success : colors.danger;

  return (
    <View style={style}>
      <View style={[bottomSpacings.l, center]}>
        <Text style={styles.label}>{t('titles.current_balance')}</Text>
        <Text style={[styles.amount, { color: balanceColor }]}>
          {NumberUtils.formatNumber(balance)}
        </Text>
      </View>
      <View style={[row, styles.spaceAround]}>
        <View>
          <Text style={[styles.label, bottomSpacings.xs]}>{t('titles.expenses')}</Text>
          <Text style={[styles.secondaryAmount, { color: colors.danger }]}>
            {NumberUtils.formatNumber(expenses)}
          </Text>
        </View>
        <View>
          <Text style={[styles.label, bottomSpacings.xs]}>{t('titles.incomes')}</Text>
          <Text style={[styles.secondaryAmount, { color: colors.success }]}>
            {NumberUtils.formatNumber(incomes)}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: colors.text.secondary,
    fontSize: fontSizes.xs,
    fontFamily: fonts.primary.medium,
    letterSpacing: -0.2,
  },
  amount: {
    fontSize: fontSizes.xxl,
    fontFamily: fonts.primary.medium,
    letterSpacing: -0.2,
  },
  secondaryAmount: {
    fontSize: fontSizes.m,
    fontFamily: fonts.primary.medium,
    letterSpacing: -0.28,
  },
  spaceAround: {
    justifyContent: 'space-around',
  },
});

export default Statistics;
