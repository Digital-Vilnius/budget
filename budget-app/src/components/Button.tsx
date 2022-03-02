import React, { FC } from 'react';
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { center, row } from '@styles/styles';
import { borderRadius, colors, fonts, fontSizes, lineHeights } from '@styles/constants';

interface Props {
  label: string;
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

const Button: FC<Props> = (props) => {
  const { onPress, label, style, labelStyle, isLoading, variant = 'primary' } = props;
  const backgroundColor = variant === 'primary' ? colors.button.primary : colors.button.secondary;
  const color = variant === 'primary' ? colors.white : colors.text.primary;

  return (
    <TouchableOpacity
      disabled={isLoading}
      style={[center, row, styles.container, { backgroundColor }, style]}
      onPress={onPress}
    >
      {!isLoading && <Text style={[styles.label, { color }, labelStyle]}>{label}</Text>}
      {isLoading && <ActivityIndicator color={colors.white} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 44,
    borderRadius: borderRadius.m,
  },
  label: {
    fontSize: fontSizes.s,
    lineHeight: lineHeights.l,
    fontWeight: '500',
    letterSpacing: -0.2,
    fontFamily: fonts.primary.medium,
  },
});

export default Button;
