import { Paging } from '@api/types';

export const getPaging = (page: number, limit: number = 10): Paging => ({
  limit,
  offset: page * limit,
});

export const getCurrentPage = (
  fetchedCount: number,
  totalCount: number,
  limit: number = 10
): number => {
  return fetchedCount / limit - 1;
};
