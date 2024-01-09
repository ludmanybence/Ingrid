import { useGetExchangeRatesQuery } from "@App/services/exchange-rate-service";
import { Currencies, Currency } from "@Types";
import {
  CurrencySelection,
  StaleCheck,
  ConversionResults,
  ConversionAmountInput,
} from "@Components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { convert, setBase, setError } from "@App/converter";
import { RootState } from "@App/store";

function Latest() {
  const dispatch = useDispatch();
  const query = useGetExchangeRatesQuery({
    currencies: [...Currencies],
  });

  const { data, error, isFetching, refetch } = query;

  useEffect(() => {
    if (error && "data" in error) {
      dispatch(setError(error.data.error.message));
    }
  }, [error, dispatch]);

  const amount = useSelector((state: RootState) => state.converterSlice.amount);
  const selectedCurrency = useSelector(
    (state: RootState) => state.converterSlice.base
  );

  const changeSelectedCurrency = (c: Currency) => {
    dispatch(setBase(c));
  };

  useEffect(() => {
    if (data && amount && selectedCurrency) {
      dispatch(convert(data.rates));
    }
  }, [data, amount, selectedCurrency, dispatch]);

  return (
    <div className="w-full h-full flex flex-col">
      {isFetching && "Loading..."}

      <div className="w-full h-full flex flex-col items-center">
        <div className="max-w-[500px] w-full [&>*]:mt-6">
          <CurrencySelection
            selectedCurrency={selectedCurrency}
            changeSelectedCurrency={changeSelectedCurrency}
          />
          <ConversionAmountInput />
          <ConversionResults />
          <StaleCheck refetch={refetch} timestamp={data?.timestamp} />
        </div>
      </div>
    </div>
  );
}

export default Latest;
