import { Currencies, Currency, CurrencyRate } from "@Types";

/**
    Returns all available currencies with the exception of the parameter passed.

    @param currency The Currency to be excluded from the results
*/
export const currenciesWithout = (currency: Currency) => {
  return Currencies.filter((c) => c !== currency);
};

/**
    Calculates the conversion of an amount between two currencies

    @param amount The amount of money to convert
    @param from The Currency the amount is originally expressed in
    @param to The Currency the amount is to be converted to
*/
export const calculateConversion = (
  amount: number,
  from: CurrencyRate,
  to: CurrencyRate,
): number => {
  return (amount / from.rate) * to.rate;
};
