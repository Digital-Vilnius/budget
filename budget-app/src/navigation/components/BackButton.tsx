import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@navigation/RootNavigator';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { row } from '@styles/styles';
import { colors, fonts, fontSizes, lineHeights, sizes } from '@styles/constants';
import { useTranslation } from 'react-i18next';

const backIcon = require('@assets/images/back.png');
const backWhiteIcon = require('@assets/images/back-white.png');

interface Props {
  isWhite?: boolean;
}

const BackButton: FC<Props> = (props) => {
  const { isWhite = false } = props;
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { t } = useTranslation();

  const color = isWhite ? colors.white : colors.text.primary;
  const icon = isWhite ? backWhiteIcon : backIcon;

  const handleOnPress = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity style={row} onPress={handleOnPress}>
      <Image style={styles.image} source={icon} />
      <Text style={[styles.title, { color }]}>{t('buttons.back')}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: fonts.primary.bold,
    fontSize: fontSizes.m,
    lineHeight: lineHeights.m,
  },
  image: {
    marginRight: sizes.xl,
  },
});

export default BackButton;
