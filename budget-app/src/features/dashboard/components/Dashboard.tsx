import React, { FC } from 'react';
import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';
import {
  borderRadius,
  bottomSpacings,
  colors,
  fonts,
  fontSizes,
  paddings,
  rightSpacings,
  sizes,
  topSpacings,
} from '@styles/constants';
import { Button, ListSeparator } from '@components';
import { CategoriesGrid } from '@features/categories/components';
import { Transactions } from '@features/transactions/components';
import { Category } from '@features/categories/types';
import { Transaction } from '@features/transactions/types';
import { center, flex1, row } from '@styles/styles';
import { useTranslation } from 'react-i18next';
import { NumberUtils } from '@utils';
import ActionButton from './ActionButton';

const addTransactionIcon = require('@assets/images/email.png');
const addCategoryIcon = require('@assets/images/email.png');
const inviteIcon = require('@assets/images/email.png');

interface Props {
  refresh: () => void;
  isRefreshing: boolean;
  categories: Category[];
  isShowAllCategoriesVisible: boolean;
  onShowAllCategoriesPress: () => void;
  onCategoryPress: (category: Category) => void;
  transactions: Transaction[];
  isShowAllTransactionsVisible: boolean;
  onShowAllTransactionsPress: () => void;
  onTransactionPress: (transaction: Transaction) => void;
  onAddTransactionPress: () => void;
  onAddCategoryPress: () => void;
  onInviteUserPress: () => void;
  balance: number;
  incomes: number;
  expenses: number;
}

const Dashboard: FC<Props> = (props) => {
  const {
    categories,
    isShowAllCategoriesVisible,
    onShowAllCategoriesPress,
    onCategoryPress,
    isRefreshing,
    refresh,
    transactions,
    onTransactionPress,
    isShowAllTransactionsVisible,
    onShowAllTransactionsPress,
    onAddTransactionPress,
    onAddCategoryPress,
    onInviteUserPress,
    balance,
    incomes,
    expenses,
  } = props;

  const { t } = useTranslation();
  const balanceColor = balance > 0 ? colors.success : colors.danger;

  return (
    <ScrollView refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={refresh} />}>
      <View style={styles.balanceContainer}>
        <View style={[row, bottomSpacings.xxl, styles.amountsContainer]}>
          <View style={[flex1, center, topSpacings.xxl]}>
            <Text style={styles.incomes}>{NumberUtils.formatNumber(incomes)}</Text>
            <Text style={styles.description}>{t('titles.incomes')}</Text>
          </View>
          <View style={[center]}>
            <Text style={[styles.balance, { color: balanceColor }]}>
              {NumberUtils.formatNumber(balance)}
            </Text>
            <Text style={styles.description}>{t('titles.current_balance')}</Text>
          </View>
          <View style={[flex1, center, topSpacings.xxl]}>
            <Text style={styles.expenses}>{NumberUtils.formatNumber(expenses)}</Text>
            <Text style={styles.description}>{t('titles.expenses')}</Text>
          </View>
        </View>
        <View style={row}>
          <ActionButton
            icon={addTransactionIcon}
            style={[flex1, rightSpacings.m]}
            onPress={onAddTransactionPress}
            label={t('buttons.add_transaction')}
          />
          <ActionButton
            icon={addCategoryIcon}
            style={[flex1, rightSpacings.m]}
            onPress={onAddCategoryPress}
            label={t('buttons.add_category')}
          />
          <ActionButton
            icon={inviteIcon}
            style={flex1}
            onPress={onInviteUserPress}
            label={t('buttons.invite_user')}
          />
        </View>
      </View>
      <View style={styles.content}>
        <View style={paddings.xl}>
          <Text style={[styles.sectionTitle, bottomSpacings.xl]}>{t('titles.categories')}</Text>
          <CategoriesGrid iconSize="m" data={categories} onItemPress={onCategoryPress} />
          {isShowAllCategoriesVisible && (
            <Button
              style={topSpacings.m}
              onPress={onShowAllCategoriesPress}
              label={t('buttons.see_all')}
              variant="secondary"
            />
          )}
        </View>
        <ListSeparator />
        <View style={paddings.xl}>
          <Text style={[styles.sectionTitle, bottomSpacings.m]}>
            {t('titles.recent_transactions')}
          </Text>
          <Transactions data={transactions} onItemPress={onTransactionPress} />
          {isShowAllTransactionsVisible && (
            <Button
              style={topSpacings.m}
              onPress={onShowAllTransactionsPress}
              label={t('buttons.see_all')}
              variant="secondary"
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  balanceContainer: {
    backgroundColor: colors.grey.light,
    paddingHorizontal: sizes.xl,
    paddingTop: 60,
    paddingBottom: 30 + borderRadius.xl,
  },
  amountsContainer: {
    alignItems: 'flex-start',
  },
  balance: {
    fontSize: fontSizes.xxl,
    fontFamily: fonts.primary.medium,
    letterSpacing: -0.2,
  },
  description: {
    color: colors.text.secondary,
    fontSize: fontSizes.xs,
    fontFamily: fonts.primary.medium,
    textAlign: 'center',
    letterSpacing: -0.2,
  },
  content: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.xxl,
    position: 'relative',
    top: -borderRadius.xl,
  },
  sectionTitle: {
    color: colors.text.primary,
    fontSize: fontSizes.m,
    fontFamily: fonts.primary.bold,
    letterSpacing: -0.28,
  },
  expenses: {
    color: colors.danger,
    fontSize: fontSizes.s,
    fontFamily: fonts.primary.medium,
    letterSpacing: -0.28,
  },
  incomes: {
    color: colors.success,
    fontSize: fontSizes.s,
    fontFamily: fonts.primary.medium,
    letterSpacing: -0.28,
  },
});

export default Dashboard;
