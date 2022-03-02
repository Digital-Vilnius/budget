import { StyleProp, TextStyle } from 'react-native';
import { colors, fonts, fontSizes, lineHeights } from '@styles/constants';

export const titleStyle: StyleProp<TextStyle> = {
  color: colors.text.primary,
  fontSize: fontSizes.xxl,
  lineHeight: lineHeights.xxl,
  fontFamily: fonts.primary.bold,
  textAlign: 'center',
};

export const descriptionStyle: StyleProp<TextStyle> = {
  color: colors.text.secondary,
  fontSize: fontSizes.s,
  lineHeight: lineHeights.xl,
  fontFamily: fonts.primary.regular,
  textAlign: 'center',
};

export const helpStyle: StyleProp<TextStyle> = {
  color: colors.text.secondary,
  fontSize: fontSizes.xs,
  lineHeight: lineHeights.m,
  fontFamily: fonts.primary.regular,
  textAlign: 'center',
  letterSpacing: -0.2,
};

export const linkStyle: StyleProp<TextStyle> = {
  ...helpStyle,
  color: colors.primary,
};
