export const Currencies = ["USD", "GBP", "SEK", "SGD"] as const;

export type Currency = (typeof Currencies)[number];

export type CurrencyRates = Record<Currency, number>;

export type CurrencyRate = { currency: keyof CurrencyRates; rate: number };
