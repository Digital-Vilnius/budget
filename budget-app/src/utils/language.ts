import { Locales } from '@core/translations/constants';

const lithuanianIcon = require('@assets/images/lt.png');
const russianIcon = require('@assets/images/ru.png');
const englishIcon = require('@assets/images/en.png');

export const languagesChoices = [
  { icon: englishIcon, value: Locales.en, label: 'English' },
  { icon: russianIcon, value: Locales.ru, label: 'Русский' },
  { icon: lithuanianIcon, value: Locales.lt, label: 'Lietuvių' },
];

export const getIcon = (locale: string) => {
  if (locale === Locales.lt) return lithuanianIcon;
  if (locale === Locales.ru) return russianIcon;
  return englishIcon;
};
