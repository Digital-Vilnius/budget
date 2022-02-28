import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '@styles/constants';
import SafeAreaView from 'react-native-safe-area-view';
import { flex1 } from '@styles/styles';

export interface ScreenContainerProps {
  children: React.ReactNode;
}

const ScreenContainer: FC<ScreenContainerProps> = (props) => {
  const { children } = props;

  return (
    <SafeAreaView style={[flex1, styles.safeArea]}>
      <View style={flex1}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.background,
  },
});

export default ScreenContainer;
