import React, { FC } from 'react';
import { useAppDispatch } from '@core/store';
import { setSelectedAccount } from '../slice';
import { Accounts as ControlledAccount } from '../components';
import { useAccounts } from '../hooks';
import { Account } from '../types';

interface Props {
  onAccountSelect: () => void;
}

const Accounts: FC<Props> = (props) => {
  const { onAccountSelect } = props;
  const { accounts, isLoading, isRefetching, refetch } = useAccounts();
  const dispatch = useAppDispatch();

  const handleItemPress = (account: Account) => {
    dispatch(setSelectedAccount({ account }));
    onAccountSelect();
  };

  return (
    <ControlledAccount
      data={accounts}
      onRefresh={refetch}
      isRefreshing={isLoading || isRefetching}
      onItemPress={handleItemPress}
    />
  );
};

export default Accounts;
