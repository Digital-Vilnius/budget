import { StyleProp, ViewStyle } from 'react-native';

export const flex1: StyleProp<ViewStyle> = {
  flex: 1,
};

export const row: StyleProp<ViewStyle> = {
  flexDirection: 'row',
  alignItems: 'center',
};

export const center: StyleProp<ViewStyle> = {
  justifyContent: 'center',
  alignItems: 'center',
};

export const spaceBetween: StyleProp<ViewStyle> = {
  justifyContent: 'space-between',
};
