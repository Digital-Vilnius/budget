import React, { FC } from 'react';
import { RefreshControl, ScrollView } from 'react-native';
import { paddings } from '@styles/constants';
import { useCategory } from '../hooks';
import { Category as ControlledCategory } from '../components';

interface Props {
  id: number;
}

const Category: FC<Props> = (props) => {
  const { id } = props;
  const { category, isRefetching, refetch } = useCategory({ id });

  return (
    <ScrollView
      refreshControl={<RefreshControl onRefresh={refetch} refreshing={isRefetching} />}
      contentContainerStyle={paddings.m}
    >
      {!!category && <ControlledCategory category={category} />}
    </ScrollView>
  );
};

export default Category;
