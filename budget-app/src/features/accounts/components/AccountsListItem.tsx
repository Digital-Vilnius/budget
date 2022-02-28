import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Account } from '../types';

export interface Props {
  onPress: () => void;
  account: Account;
}

const AccountsListItem: FC<Props> = (props) => {
  const { onPress, account } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{account.name}</Text>
    </TouchableOpacity>
  );
};

export default AccountsListItem;
