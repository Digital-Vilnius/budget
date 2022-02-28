import React, { FC } from 'react';
import { useSettingsForm } from '@features/settings/hooks';
import { SettingsForm } from '@features/settings/components';
import { StyleSheet, View } from 'react-native';
import { flex1 } from '@styles/styles';
import { colors, fonts, fontSizes, lineHeights, sizes } from '@styles/constants';

const Settings: FC = () => {
  const { control, save, handleSubmit, isLoading } = useSettingsForm();

  return (
    <View style={[flex1, styles.container]}>
      <SettingsForm isLoading={isLoading} control={control} onSave={handleSubmit(save)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: sizes.xs,
    justifyContent: 'space-between',
    paddingBottom: sizes.m,
  },
  link: {
    fontSize: fontSizes.s,
    lineHeight: lineHeights.s,
    color: colors.text.primary,
    textAlign: 'center',
    fontFamily: fonts.secondary.regular,
  },
});

export default Settings;
