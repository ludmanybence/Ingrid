import type { Currency, CurrencyRates } from "@Types";

export interface LatestRate {
  success: boolean;
  timestamp: number;
  base: Currency;
  date: string;
  rates: CurrencyRates;
}
