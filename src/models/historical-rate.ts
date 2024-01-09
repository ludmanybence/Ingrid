import type { Currency, CurrencyRates } from "@Types";

export interface HistoricalRate {
  success: boolean;
  historical: true;
  timestamp: number;
  base: Currency;
  date: string;
  rates: CurrencyRates;
}
