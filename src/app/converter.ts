import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Currency, CurrencyRate, CurrencyRates } from "@Types";
import { calculateConversion, currenciesWithout } from "@Utils/currency-utils";

export interface ConverterState {
  base: Currency;
  amount: number;
  conversions: Record<Currency, number>;
  error: string | undefined;
}

const initialState: ConverterState = {
  base: "SEK",
  amount: 200,
  conversions: {} as Record<Currency, number>,
  error: undefined,
};

export const converterSlice = createSlice({
  name: "converter",
  initialState,
  reducers: {
    convert: (state, action: PayloadAction<CurrencyRates>) => {
      state.conversions = {} as Record<Currency, number>;
      const rates = action.payload;
      const { base, amount } = state;

      const baseRate: CurrencyRate = { currency: base, rate: rates[base] };
      if (baseRate !== undefined) {
        currenciesWithout(base).map((currency) => {
          const rate: CurrencyRate = {
            currency: currency,
            rate: rates[currency],
          };
          if (!rate) return;

          state.conversions[currency] = calculateConversion(
            amount,
            baseRate,
            rate
          );
        });
      }
    },
    setBase: (state, action: PayloadAction<Currency>) => {
      state.base = action.payload;
    },
    setAmount: (state, action: PayloadAction<number>) => {
      state.amount = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { convert, setBase, setAmount, setError } = converterSlice.actions;
export default converterSlice.reducer;
