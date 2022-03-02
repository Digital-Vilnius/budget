import React, { FC } from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
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
import { center } from '@styles/styles';

interface Props {
  onPress: () => void;
  label: string;
  icon: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
}

const ActionButton: FC<Props> = (props) => {
  const { onPress, label, icon, style } = props;

  return (
    <TouchableOpacity style={[styles.container, center, style]} onPress={onPress}>
      <Image height={24} resizeMode="contain" style={bottomSpacings.xs} source={icon} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: sizes.s,
    paddingVertical: sizes.l,
    borderRadius: borderRadius.m,
  },
  label: {
    color: colors.text.primary,
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.m,
    fontFamily: fonts.primary.medium,
    textAlign: 'center',
    letterSpacing: -0.2,
  },
});

export default ActionButton;
