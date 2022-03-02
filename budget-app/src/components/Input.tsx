import React, { FC } from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import {
  borderRadius,
  bottomSpacings,
  colors,
  fonts,
  fontSizes,
  lineHeights,
  sizes,
} from '@styles/constants';
import hexToRgba from 'hex-to-rgba';

type Props = Omit<TextInputProps, 'editable' | 'onChange' | 'placeholderTextColor'> & {
  onChange: (value: string) => void;
  label?: string;
  disabled?: boolean;
  error?: string;
  containerStyle?: StyleProp<ViewStyle>;
};

const Input: FC<Props> = (props) => {
  const { onChange, label, disabled, error, containerStyle, style, ...rest } = props;

  return (
    <View style={[styles.container, containerStyle]}>
      {!!label && <Text style={[styles.label, bottomSpacings.s]}>{label}</Text>}
      <TextInput
        style={[styles.input, style]}
        onChangeText={(text) => onChange(text)}
        placeholderTextColor={hexToRgba(colors.text.primary, 0.4)}
        editable={!disabled}
        {...rest}
      />
      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    fontWeight: '500',
    fontFamily: fonts.primary.medium,
    fontSize: fontSizes.s,
    lineHeight: lineHeights.l,
    letterSpacing: -0.2,
    color: colors.text.tertiary,
  },
  input: {
    backgroundColor: colors.grey.light,
    borderRadius: borderRadius.m,
    paddingHorizontal: sizes.m,
    height: 44,
    fontFamily: fonts.primary.regular,
    letterSpacing: -0.2,
    fontSize: fontSizes.s,
    lineHeight: lineHeights.l,
    color: colors.text.primary,
  },
  error: {
    color: colors.danger,
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.s,
    fontFamily: fonts.primary.regular,
    marginTop: sizes.xs,
  },
});

export default Input;
