import moment from 'moment';

export const formatTime = (value: string): string => {
  return moment(value).format('HH:mm');
};

export const formatDate = (value: string): string => {
  return moment(value).format('YYYY-MM-DD');
};

export const formatDateTime = (value: string): string => {
  return moment(value).format('YYYY-MM-DD HH:mm');
};
