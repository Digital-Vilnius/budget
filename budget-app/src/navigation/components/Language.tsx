import React, { FC } from 'react';
import { useAppSelector } from '@core/store';
import { useNavigation } from '@react-navigation/native';
import { Image, TouchableOpacity } from 'react-native';
import { LanguagesUtils } from '@utils';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabsParamList } from '@navigation/TabsNavigator';
import { settingsRoute } from '../types';

const Language: FC = () => {
  const { locale } = useAppSelector((state) => state.settings);
  const navigation = useNavigation<BottomTabNavigationProp<TabsParamList>>();

  const handleOnPress = () => {
    navigation.navigate(settingsRoute);
  };

  return (
    <TouchableOpacity onPress={handleOnPress}>
      <Image source={LanguagesUtils.getIcon(locale)} />
    </TouchableOpacity>
  );
};

export default Language;
