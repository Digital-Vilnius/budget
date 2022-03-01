import React, { FC } from 'react';
import { SafeAreaView, View } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer/src/types';
import { flex1 } from '@styles/styles';
import { Accounts } from '@features/accounts/hoc';

const DrawerContent: FC<DrawerContentComponentProps> = (props) => {
  const { navigation } = props;

  return (
    <View style={flex1}>
      <SafeAreaView style={flex1}>
        <Accounts onAccountSelect={navigation.closeDrawer} />
      </SafeAreaView>
    </View>
  );
};

export default DrawerContent;
