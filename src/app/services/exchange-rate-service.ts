import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryMeta,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { Currency } from "@Types";
import { ErrorResponse, HistoricalRate, LatestRate } from "@Models";
import { REHYDRATE } from "redux-persist";
import { Action } from "@reduxjs/toolkit";
import { HistoricalRateDate } from "@Types/date";

export const exchangeIoParams = {
  access_key: import.meta.env.VITE_EXCHANGEIO_API_KEY,
};

function isHydrateAction(action: Action): action is Action<typeof REHYDRATE> & {
  key: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
  err: unknown;
} {
  return action.type === REHYDRATE;
}

export const exchangeRateApi = createApi({
  reducerPath: "exchangeRateApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://api.exchangeratesapi.io/v1/",
  }) as BaseQueryFn<
    string | FetchArgs,
    unknown,
    ErrorResponse,
    object,
    FetchBaseQueryMeta
  >,
  // to prevent circular type issues, the return type needs to be annotated as any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extractRehydrationInfo(action, { reducerPath }): any {
    if (isHydrateAction(action)) {
      // when persisting the api reducer
      if (action.key === "key used with redux-persist") {
        return action.payload;
      }

      // When persisting the root reducer
      if (action.payload) {
        return action.payload[reducerPath];
      }
    }
  },
  endpoints: (builder) => ({
    getExchangeRates: builder.query<LatestRate, { currencies: Currency[] }>({
      query: ({ currencies }) => ({
        url: "latest",
        params: {
          ...exchangeIoParams,
          symbols: currencies,
        },
      }),
    }),
    getHistoricRates: builder.query<
      HistoricalRate,
      { currencies: Currency[]; date: HistoricalRateDate }
    >({
      query: ({ currencies, date }) => ({
        url: date,
        params: {
          ...exchangeIoParams,
          symbols: currencies,
        },
      }),
    }),
  }),
});

export const { useGetExchangeRatesQuery, useGetHistoricRatesQuery } =
  exchangeRateApi;
