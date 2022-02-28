import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Locales } from '@core/translations/constants';

interface State {
  locale: string;
  isLocaleInit: boolean;
  isNotificationsOn: boolean;
  isTermsAndConditionsAgreed: boolean;
}

const initialState: State = {
  locale: Locales.en,
  isLocaleInit: false,
  isNotificationsOn: false,
  isTermsAndConditionsAgreed: false,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setLocale(state, action: PayloadAction<{ locale: string }>) {
      state.locale = action.payload.locale;
    },
    agreeTermsAndConditions(state) {
      state.isTermsAndConditionsAgreed = true;
    },
    setIsLocaleInit(state) {
      state.isLocaleInit = true;
    },
    setIsNotificationsOn(state, action: PayloadAction<{ isNotificationsOn: boolean }>) {
      state.isNotificationsOn = action.payload.isNotificationsOn;
    },
  },
});

export const { setLocale, setIsNotificationsOn, agreeTermsAndConditions, setIsLocaleInit } =
  settingsSlice.actions;
export const { reducer } = settingsSlice;
