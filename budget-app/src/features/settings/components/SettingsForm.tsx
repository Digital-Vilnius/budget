import React, { FC } from 'react';
import { Control, Controller } from 'react-hook-form';
import { SettingsFormData } from '@features/settings/types';
import { StyleSheet, Text, View } from 'react-native';
import { Button, LanguagesChoice, Section, Switch } from '@components';
import { bottomSpacings, colors, fontSizes, lineHeights, sizes } from '@styles/constants';
import { flex1, row, spaceBetween } from '@styles/styles';
import { useTranslation } from 'react-i18next';

interface Props {
  control: Control<SettingsFormData>;
  isLoading: boolean;
  onSave: () => void;
}

const SettingsForm: FC<Props> = (props) => {
  const { onSave, control, isLoading } = props;
  const { t } = useTranslation();

  return (
    <View>
      <Section
        contentStyle={styles.languagesContent}
        style={bottomSpacings.l}
        title={t('titles.languages')}
      >
        <Controller
          control={control}
          name="lang"
          render={({ field }) => <LanguagesChoice onChange={field.onChange} value={field.value} />}
        />
      </Section>
      <Section style={bottomSpacings.xl} title={t('titles.notifications')}>
        <View style={[row, spaceBetween]}>
          <View style={[flex1, styles.notificationsDetails]}>
            <Text style={styles.notificationsTitle}>{t('titles.push_notifications')}</Text>
            <Text style={styles.notificationsDescription}>
              {t('phrases.push_notifications_description')}
            </Text>
          </View>
          <Controller
            control={control}
            name="isNotificationsOn"
            render={({ field }) => <Switch onChange={field.onChange} selected={field.value} />}
          />
        </View>
      </Section>
      <Button isLoading={isLoading} onPress={onSave} label={t('buttons.update_settings')} />
    </View>
  );
};

const styles = StyleSheet.create({
  languagesContent: {
    paddingVertical: sizes.xs,
  },
  notificationsDetails: {
    paddingRight: sizes.xxl,
  },
  notificationsTitle: {
    color: colors.text.primary,
    fontSize: fontSizes.s,
    lineHeight: lineHeights.m,
  },
  notificationsDescription: {
    color: colors.text.primary,
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.xs,
    opacity: 0.6,
  },
});

export default SettingsForm;
