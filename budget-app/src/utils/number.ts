import getSymbolFromCurrency from 'currency-symbol-map';
import { store } from '@core/store';

export const formatNumber = (value: number): string => {
  const currency = store.getState().accounts.selectedAccount?.currency ?? 'Unknown';
  return `${value.toFixed(2)} ${getSymbolFromCurrency(currency)}`;
};
