import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { Button } from '@components';
import { useTranslation } from 'react-i18next';
import { flex1 } from '@styles/styles';
import { bottomSpacings, paddings } from '@styles/constants';
import { descriptionStyle, helpStyle, linkStyle, titleStyle } from '@features/auth/styles';
import { loginRoute } from '@navigation/types';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from '@navigation/AuthNavigator';
import { useCodeConfirmationForm, useLoginForm } from '../hooks';
import { CodeConfirmationForm } from '../components';

interface Props {
  phone: string;
}

const CodeConfirmation: FC<Props> = (props) => {
  const { phone } = props;
  const { t } = useTranslation();
  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();
  const { isLoading, confirmCode, handleSubmit, control } = useCodeConfirmationForm({ phone });
  const { login } = useLoginForm();

  const handleResendCode = () => {
    return login({ phone });
  };

  return (
    <View style={[flex1, paddings.xl]}>
      <View style={flex1}>
        <Text style={[titleStyle, bottomSpacings.s]}>{t('titles.confirm_code')}</Text>
        <Text style={[descriptionStyle, bottomSpacings.xxl]}>
          {t('phrases.confirm_code', { phone })}
        </Text>
        <CodeConfirmationForm
          onSubmit={handleSubmit(confirmCode)}
          style={bottomSpacings.l}
          control={control}
        />
        <Text style={helpStyle}>
          <Text style={helpStyle}>{t('phrases.did_not_receive_code')}</Text>
          {` `}
          <Text onPress={handleResendCode} style={linkStyle}>
            {t('buttons.resend_code')}
          </Text>
        </Text>
      </View>
      <Button
        style={bottomSpacings.s}
        isLoading={isLoading}
        label={t('buttons.confirm')}
        onPress={handleSubmit(confirmCode)}
      />
      <Button
        style={bottomSpacings.xl}
        onPress={() => navigation.navigate(loginRoute)}
        variant="secondary"
        label={t('buttons.change_phone_number')}
      />
      <Text style={helpStyle}>{t('phrases.sign_in_agreement')}</Text>
      <Text style={linkStyle}>{t('buttons.terms_and_conditions')}</Text>
    </View>
  );
};

export default CodeConfirmation;
