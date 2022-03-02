import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@navigation/RootNavigator';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { row } from '@styles/styles';
import { sizes } from '@styles/constants';

const backIcon = require('@assets/images/back.png');

const BackButton: FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleOnPress = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity style={row} onPress={handleOnPress}>
      <Image style={styles.image} source={backIcon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    marginRight: sizes.xl,
  },
});

export default BackButton;
