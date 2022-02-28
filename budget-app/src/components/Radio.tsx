import React, { FC } from 'react';
import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { colors, fonts, fontSizes, lineHeights, sizes } from '@styles/constants';
import { center, flex1, row } from '@styles/styles';
import hexToRgba from 'hex-to-rgba';

const check = require('@assets/images/check.png');

interface Props {
  checked: boolean;
  onChange?: (value: boolean) => void;
  disabled?: boolean;
  label?: string;
  style?: StyleProp<ViewStyle>;
  error?: string;
}

const Radio: FC<Props> = (props) => {
  const { checked, onChange, disabled, style, label, error } = props;

  const handleOnPress = () => {
    if (!onChange) return;
    onChange(!checked);
  };

  const borderColor = checked ? colors.grey.light : hexToRgba(colors.text.primary, 0.2);

  return (
    <View style={style}>
      <TouchableOpacity style={[row, styles.container]} disabled={disabled} onPress={handleOnPress}>
        <View style={[styles.checkContainer, { borderColor }]}>
          {checked && (
            <View style={[center, styles.check]}>
              <Image source={check} />
            </View>
          )}
        </View>
        {!!label && <Text style={[styles.label, flex1]}>{label}</Text>}
      </TouchableOpacity>
      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  checkContainer: {
    backgroundColor: colors.white,
    height: 28,
    width: 28,
    borderRadius: 14,
    borderWidth: 1,
  },
  check: {
    flex: 1,
    borderRadius: 13,
    backgroundColor: colors.grey.light,
  },
  label: {
    paddingLeft: sizes.m,
    fontFamily: fonts.secondary.regular,
    fontSize: fontSizes.s,
    lineHeight: lineHeights.s,
    color: colors.text.primary,
  },
  error: {
    color: colors.primary,
    fontSize: fontSizes.s,
    lineHeight: lineHeights.s,
    fontFamily: fonts.secondary.regular,
    marginTop: sizes.xxxs,
  },
});

export default Radio;
