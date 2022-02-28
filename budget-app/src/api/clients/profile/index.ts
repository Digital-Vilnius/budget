import { ResultResponse } from '@api/types';
import httpClient from '@api/httpClient';
import { Settings } from './types';

const baseUrl = '/settings';

export const getSettings = async () => {
  return httpClient.get<void, ResultResponse<Settings>>(baseUrl);
};
