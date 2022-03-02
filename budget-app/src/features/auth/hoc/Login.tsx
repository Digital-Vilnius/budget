import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { bottomSpacings, paddings } from '@styles/constants';
import { useTranslation } from 'react-i18next';
import { Button } from '@components';
import { registrationRoute } from '@navigation/types';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from '@navigation/AuthNavigator';
import { flex1 } from '@styles/styles';
import { useLoginForm } from '../hooks';
import { LoginForm } from '../components';
import { descriptionStyle, titleStyle } from '../styles';

const Login: FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();
  const { isLoading, login, handleSubmit, control } = useLoginForm();

  return (
    <View style={[flex1, paddings.xl]}>
      <View style={flex1}>
        <Text style={[titleStyle, bottomSpacings.s]}>{t('titles.sign_in')}</Text>
        <Text style={[descriptionStyle, bottomSpacings.xxl]}>{t('phrases.sign_in')}</Text>
        <LoginForm control={control} />
      </View>
      <Button
        style={bottomSpacings.s}
        isLoading={isLoading}
        label={t('buttons.sign_in')}
        onPress={handleSubmit(login)}
      />
      <Button
        onPress={() => navigation.navigate(registrationRoute)}
        variant="secondary"
        label={t('buttons.create_an_account')}
      />
    </View>
  );
};

export default Login;
