import { ResultResponse } from '@api/types';
import httpClient from '@api/httpClient';
import { Profile } from './types';

const baseUrl = '/profile';

export const getProfile = async () => {
  return httpClient.get<void, ResultResponse<Profile>>(baseUrl);
};
