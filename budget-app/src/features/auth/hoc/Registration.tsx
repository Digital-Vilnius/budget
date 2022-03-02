import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { Button } from '@components';
import { bottomSpacings, paddings } from '@styles/constants';
import { loginRoute } from '@navigation/types';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from '@navigation/AuthNavigator';
import { flex1 } from '@styles/styles';
import { descriptionStyle, titleStyle } from '@features/auth/styles';
import { RegistrationForm } from '../components';
import { useRegistrationForm } from '../hooks';

const Registration: FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();
  const { isLoading, register, handleSubmit, control } = useRegistrationForm();

  return (
    <View style={[flex1, paddings.xl]}>
      <View style={flex1}>
        <Text style={[titleStyle, bottomSpacings.s]}>{t('titles.sign_up')}</Text>
        <Text style={[descriptionStyle, bottomSpacings.xxl]}>{t('phrases.sign_up')}</Text>
        <RegistrationForm control={control} />
      </View>
      <Button
        style={bottomSpacings.s}
        isLoading={isLoading}
        label={t('buttons.sign_up')}
        onPress={handleSubmit(register)}
      />
      <Button
        onPress={() => navigation.navigate(loginRoute)}
        variant="secondary"
        label={t('buttons.sign_in_to_an_existing_account')}
      />
    </View>
  );
};

export default Registration;
