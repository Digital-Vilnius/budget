import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { colors, fonts, fontSizes, lineHeights, sizes } from '@styles/constants';

export const cardStyle: StyleProp<ViewStyle> = {
  backgroundColor: colors.background,
};

export const headerTitleStyle: StyleProp<TextStyle> = {
  color: colors.text.primary,
  fontSize: fontSizes.m,
  lineHeight: lineHeights.xxl,
  fontFamily: fonts.primary.medium,
};

export const headerRightContainerStyle: StyleProp<ViewStyle> = {
  paddingRight: sizes.l,
};

export const headerLeftContainerStyle: StyleProp<ViewStyle> = {
  paddingLeft: sizes.l,
};
