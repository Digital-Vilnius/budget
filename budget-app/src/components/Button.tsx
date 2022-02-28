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
import { colors, fonts, fontSizes, lineHeights } from '@styles/constants';

interface Props {
  label: string;
  isLoading?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

const Button: FC<Props> = (props) => {
  const { onPress, label, containerStyle, labelStyle, isLoading } = props;

  return (
    <TouchableOpacity
      disabled={isLoading}
      style={[center, styles.container, row, containerStyle]}
      onPress={onPress}
    >
      {!isLoading && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      {isLoading && <ActivityIndicator color={colors.white} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.button.primary,
    position: 'relative',
  },
  label: {
    fontSize: fontSizes.m,
    lineHeight: lineHeights.m,
    color: colors.white,
    fontFamily: fonts.secondary.semiBold,
  },
});

export default Button;
