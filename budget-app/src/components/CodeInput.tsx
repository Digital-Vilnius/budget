import React, { FC } from 'react';
import { CodeField } from 'react-native-confirmation-code-field';
import { StyleProp, StyleSheet, Text, ViewStyle } from 'react-native';
import { RenderCellOptions } from 'react-native-confirmation-code-field/esm/CodeField';
import { borderRadius, colors, fonts, fontSizes, sizes } from '@styles/constants';

interface Props {
  value: string;
  onChange: (code: string) => void;
  length?: number;
  error?: string;
  style?: StyleProp<ViewStyle>;
}

const CodeInput: FC<Props> = (props) => {
  const { value, onChange, error, style, length = 4 } = props;

  const renderCell = (options: RenderCellOptions) => {
    const { index, isFocused, symbol } = options;
    const borderColor = isFocused ? colors.primary : colors.grey.light;

    return (
      <Text key={index} style={[styles.cell, { borderColor: error ? colors.danger : borderColor }]}>
        {symbol}
      </Text>
    );
  };

  return (
    <CodeField
      value={value}
      onChangeText={onChange}
      cellCount={length}
      rootStyle={[styles.container, style]}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={renderCell}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: sizes.xxl,
  },
  cell: {
    borderWidth: 1,
    borderRadius: borderRadius.m,
    backgroundColor: colors.grey.light,
    width: 65,
    height: 65,
    lineHeight: 65,
    textAlign: 'center',
    color: colors.text.primary,
    fontSize: fontSizes.m,
    fontFamily: fonts.primary.bold,
  },
});

export default CodeInput;
