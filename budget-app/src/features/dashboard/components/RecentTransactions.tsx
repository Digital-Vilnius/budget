import React, { FC } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { bottomSpacings, colors, fonts, fontSizes, topSpacings } from '@styles/constants';
import { Button } from '@components';
import { TransactionsListItem } from '@features/transactions/components';
import { Transaction } from '@features/transactions/types';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '@navigation/MainNavigator';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabsParamList } from '@navigation/TabsNavigator';
import { transactionRoute, transactionsRoute } from '@navigation/types';

interface Props {
  transactions: Transaction[];
  transactionsCount: number;
  style?: StyleProp<ViewStyle>;
}

const RecentTransactions: FC<Props> = (props) => {
  const { transactions, transactionsCount, style } = props;

  const stackNavigation = useNavigation<StackNavigationProp<MainStackParamList>>();
  const tabsNavigation = useNavigation<BottomTabNavigationProp<TabsParamList>>();
  const { t } = useTranslation();

  return (
    <View style={style}>
      <Text style={[styles.title, bottomSpacings.m]}>{t('titles.recent_transactions')}</Text>
      {transactions.map((transaction) => (
        <TransactionsListItem
          key={transaction.id}
          onPress={() => stackNavigation.navigate(transactionRoute, { id: transaction.id })}
          item={transaction}
        />
      ))}
      {transactionsCount > transactions.length && (
        <Button
          style={topSpacings.m}
          onPress={() => tabsNavigation.navigate(transactionsRoute)}
          label={t('buttons.see_all')}
          variant="secondary"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: colors.text.primary,
    fontSize: fontSizes.m,
    fontFamily: fonts.primary.bold,
    letterSpacing: -0.28,
  },
});

export default RecentTransactions;
