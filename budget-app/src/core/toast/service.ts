import Toast from 'react-native-toast-message';

export const success = (title: string, description?: string) => {
  Toast.show({ text1: title, text2: description, type: 'success' });
};

export const error = (title: string, description?: string) => {
  Toast.show({ text1: title, text2: description, type: 'error' });
};
