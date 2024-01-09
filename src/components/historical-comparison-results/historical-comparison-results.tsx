import { HistoricalRate } from "@Models/historical-rate";
import { ResultsContainer } from "..";
import { Currency } from "@Types";

interface Props {
  startData: HistoricalRate;
  endData: HistoricalRate;
}

const HistoricalComparisonResults = ({ startData, endData }: Props) => {
  return startData && endData ? (
    <div className="flex w-full justify-center [&>*:first-child]:mr-6">
      <ResultsContainer
        header={<span className="text-4xl">{startData.date}</span>}
      >
        {Object.entries(startData.rates).map(([baseCurrency, rate]) => (
          <div
            key={startData.date + baseCurrency}
            className="flex items-center"
          >
            <span className="text-2xl text-slate-400 pr-5">{baseCurrency}</span>
            <span className="text-4xl text-gray-500">
              {rate && rate.toFixed(2)}
            </span>
          </div>
        ))}
      </ResultsContainer>

      <ResultsContainer
        header={<span className="text-4xl">{endData.date}</span>}
      >
        {Object.entries(endData.rates).map(([baseCurrency, rate]) => {
          const isLower = startData.rates[baseCurrency as Currency] > rate;
          const isHigher = startData.rates[baseCurrency as Currency] < rate;

          return (
            <div
              key={endData.date + baseCurrency}
              className="flex items-center"
            >
              <span
                className={`text-2xl ${
                  isLower
                    ? "text-red-800"
                    : isHigher
                    ? "text-green-500"
                    : "text-slate-400"
                } pr-5`}
              >
                {baseCurrency}
              </span>
              <span
                className={`text-4xl ${
                  isLower
                    ? "text-red-800"
                    : isHigher
                    ? "text-green-500"
                    : "text-slate-400"
                }`}
              >
                {rate && rate.toFixed(2)}
                {isHigher && <>&#8593;</>} {/*Up arrow*/}
                {isLower && <>&#8593;</>} {/*Down arrow*/}
              </span>
            </div>
          );
        })}
      </ResultsContainer>
    </div>
  ) : null;
};

export default HistoricalComparisonResults;
