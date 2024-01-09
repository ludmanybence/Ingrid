import { useGetHistoricRatesQuery } from "@App/services/exchange-rate-service";
import { Currencies } from "@Types";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setError } from "@App/historical";
import { HistoricalComparisonResults } from "@Components";

function Historical() {
  const dispatch = useDispatch();

  //Fetch the dates specified in the instructions (I would have created time picker components had I had extra time to spend)
  const startDateQuery = useGetHistoricRatesQuery({
    date: "2015-03-26",
    currencies: [...Currencies],
  });

  const endDateQuery = useGetHistoricRatesQuery({
    date: "2017-06-13",
    currencies: [...Currencies],
  });

  const {
    data: startData,
    error: startError,
    isFetching: startIsFetching,
  } = startDateQuery;

  const {
    data: endData,
    error: endError,
    isFetching: endIsFetching,
  } = endDateQuery;

  useEffect(() => {
    if (endError && "data" in endError) {
      dispatch(setError(endError.data.error.message));
    }

    if (startError && "data" in startError) {
      dispatch(setError(startError.data.error.message));
    }
  }, [endError, startError, dispatch]);

  return (
    <div className="w-full h-full flex flex-col">
      {startIsFetching || (endIsFetching && "Loading...")}
      <div className="w-full h-full flex flex-col items-center mt-16">
        <span className="mb-6">
          Base: <b>EUR</b>
        </span>
        {startData && endData && (
          <HistoricalComparisonResults
            startData={startData}
            endData={endData}
          />
        )}
      </div>
    </div>
  );
}

export default Historical;
