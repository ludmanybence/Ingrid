import { RootState } from "@App/store";
import { ResultsContainer } from "@Components";
import { useSelector } from "react-redux";

const ConversionResults = () => {
  const conversions = useSelector(
    (state: RootState) => state.converterSlice.conversions
  );
  const amount = useSelector((state: RootState) => state.converterSlice.amount);
  const base = useSelector((state: RootState) => state.converterSlice.base);

  return Object.keys(conversions).length ? (
    <ResultsContainer
      header={
        <div>
          <div className="text-3xl">{base}</div>
          <div className="text-5xl">{amount}</div>
        </div>
      }
    >
      {Object.entries(conversions).map(([baseCurrency, amount]) => (
        <div key={baseCurrency} className="flex items-center">
          <span className="text-2xl text-slate-400 pr-5">{baseCurrency}</span>
          <span className="text-4xl text-sky-400">
            {amount && amount.toFixed(2)}
          </span>
        </div>
      ))}
    </ResultsContainer>
  ) : null;
};

export default ConversionResults;
