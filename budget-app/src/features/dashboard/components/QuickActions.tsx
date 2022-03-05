import React, { FC, useMemo } from 'react';
import { categoryFormRoute, transactionFormRoute } from '@navigation/types';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '@navigation/MainNavigator';
import { useTranslation } from 'react-i18next';
import { leftSpacings, rightSpacings } from '@styles/constants';
import { flex1, row } from '@styles/styles';
import { ActionButton } from '@features/dashboard/components/index';
import { StyleProp, View, ViewStyle } from 'react-native';

const addTransactionIcon = require('@assets/images/email.png');
const addCategoryIcon = require('@assets/images/email.png');
const inviteIcon = require('@assets/images/email.png');

interface Props {
  style?: StyleProp<ViewStyle>;
}

const QuickActions: FC<Props> = (props) => {
  const { style } = props;

  const stackNavigation = useNavigation<StackNavigationProp<MainStackParamList>>();
  const { t } = useTranslation();

  const quickActions = useMemo(() => {
    return [
      {
        label: t('buttons.add_transaction'),
        icon: addTransactionIcon,
        onPress: () => stackNavigation.navigate(transactionFormRoute),
      },
      {
        label: t('buttons.add_category'),
        icon: addCategoryIcon,
        onPress: () => stackNavigation.navigate(categoryFormRoute),
      },
      {
        label: t('buttons.invite_user'),
        icon: inviteIcon,
        onPress: console.log,
      },
    ];
  }, [stackNavigation, t]);

  return (
    <View style={[style, row]}>
      {quickActions.map((quickAction) => (
        <ActionButton
          style={[flex1, rightSpacings.s, leftSpacings.s]}
          key={quickAction.label}
          onPress={quickAction.onPress}
          label={quickAction.label}
          icon={quickAction.icon}
        />
      ))}
    </View>
  );
};

export default QuickActions;
