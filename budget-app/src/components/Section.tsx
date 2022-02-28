import React, { FC } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { borderRadius, colors, fonts, fontSizes, lineHeights, sizes } from '@styles/constants';

interface Props {
  title: string;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
}

const Section: FC<Props> = (props) => {
  const { title, children, style, contentStyle } = props;

  return (
    <View style={style}>
      <Text style={styles.title}>{title}</Text>
      <View style={[styles.content, contentStyle]}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: fontSizes.s,
    lineHeight: lineHeights.s,
    color: colors.text.primary,
    fontFamily: fonts.primary.bold,
    marginBottom: sizes.xxs,
  },
  content: {
    backgroundColor: colors.white,
    paddingVertical: sizes.l,
    paddingHorizontal: sizes.m,
    borderRadius: borderRadius.s,
  },
});

export default Section;
