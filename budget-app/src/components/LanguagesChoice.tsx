import React, { FC } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LanguagesUtils } from '@utils';
import { flex1, row, spaceBetween } from '@styles/styles';
import { colors, fonts, fontSizes, lineHeights, sizes } from '@styles/constants';
import Radio from './Radio';

interface Props {
  onChange: (value: string) => void;
  value: string;
}

const LanguagesChoice: FC<Props> = (props) => {
  const { value, onChange } = props;

  return (
    <View>
      {LanguagesUtils.languagesChoices.map((choice) => (
        <TouchableOpacity
          style={[row, spaceBetween, styles.choice]}
          onPress={() => onChange(choice.value)}
          key={choice.value}
        >
          <View style={[row, flex1]}>
            <Image style={styles.icon} source={choice.icon} />
            <Text style={styles.label}>{choice.label}</Text>
          </View>
          <Radio disabled checked={choice.value === value} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  choice: {
    paddingVertical: sizes.xs,
  },
  icon: {
    marginRight: sizes.m,
  },
  label: {
    fontFamily: fonts.secondary.regular,
    fontSize: fontSizes.m,
    lineHeight: lineHeights.m,
    color: colors.text.primary,
  },
});

export default LanguagesChoice;
