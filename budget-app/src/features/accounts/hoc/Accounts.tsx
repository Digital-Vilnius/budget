import React, { FC } from 'react';
import { useAccounts } from '../hooks';
import { Accounts as ControlledAccount } from '../components';

const Accounts: FC = () => {
  const { accounts, isLoading, loadMore, isRefetching, refetch } = useAccounts();

  return (
    <ControlledAccount
      data={accounts}
      onRefresh={refetch}
      isRefreshing={isLoading || isRefetching}
      onAccountPress={console.log}
      onEndReached={loadMore}
    />
  );
};

export default Accounts;
