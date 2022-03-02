import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts, fontSizes, lineHeights, sizes } from '@styles/constants';
import { row } from '@styles/styles';
import { TransactionsSection } from '../types';

interface Props {
  section: TransactionsSection;
}

const TransactionsSectionHeader: FC<Props> = (props) => {
  const { section } = props;

  return (
    <View style={[row, styles.container]}>
      <Text style={styles.title}>{section.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: sizes.l,
    borderColor: colors.grey.light,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: fontSizes.s,
    lineHeight: lineHeights.l,
    fontFamily: fonts.primary.bold,
    color: colors.text.primary,
    letterSpacing: -0.2,
  },
});

export default TransactionsSectionHeader;
