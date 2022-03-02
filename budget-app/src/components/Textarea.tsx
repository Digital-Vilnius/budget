import React, { FC } from 'react';
import { StyleProp, StyleSheet, Text, TextInput, View, ViewStyle } from 'react-native';
import { borderRadius, colors, fontSizes, lineHeights, sizes } from '@styles/constants';
import hexToRgba from 'hex-to-rgba';

interface Props {
  onChange: (value: string) => void;
  value: string;
  onBlur?: () => void;
  placeholder?: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  error?: string;
}

const Textarea: FC<Props> = (props) => {
  const { onChange, value, disabled, placeholder, onBlur, style, error } = props;

  return (
    <View style={style}>
      <TextInput
        style={styles.textarea}
        onChangeText={(text) => onChange(text)}
        value={value}
        onBlur={onBlur}
        placeholderTextColor={hexToRgba(colors.text.primary, 0.4)}
        placeholder={placeholder}
        editable={!disabled}
        multiline
        numberOfLines={4}
      />
      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  textarea: {
    backgroundColor: colors.white,
    paddingHorizontal: sizes.m,
    paddingVertical: sizes.m,
    height: 120,
    borderRadius: borderRadius.s,
    fontSize: fontSizes.s,
    lineHeight: lineHeights.m,
    color: colors.text.primary,
    textAlignVertical: 'top',
  },
  error: {
    color: colors.primary,
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.s,
  },
});

export default Textarea;
