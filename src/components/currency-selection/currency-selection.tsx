import { Currency } from "@Types/currency";
import { currenciesWithout } from "@Utils/currency-utils";
import { useState, MouseEvent } from "react";

interface Props {
  selectedCurrency: Currency;
  changeSelectedCurrency: (c: Currency) => void;
}

const CurrencySelection = ({
  selectedCurrency,
  changeSelectedCurrency,
}: Props) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const onOptionClick = (
    event: MouseEvent<HTMLButtonElement>,
    currency: Currency
  ) => {
    event.stopPropagation();
    setShowOptions(false);
    changeSelectedCurrency(currency);
  };

  return (
    <div className="relative">
      <label>
        Currency
        <div
          className="p-3 border-slate-300 border-2 rounded select-none justify-between flex items-center"
          onClick={() => setShowOptions((v) => !v)}
        >
          {selectedCurrency}

          {/*Chevron - Rotate the arrow depending on closed/open option state*/}
          <div
            className={`
    ${showOptions ? "rotate-90" : "-rotate-90"}
    flex justify-center items-center text-xl text-slate-500
    `}
          >
            &#10094;
          </div>
        </div>
      </label>
      {showOptions && (
        <div className="mt-1 border-slate-300 border-2 rounded absolute bg-white w-full">
          <div className="flex flex-col">
            {currenciesWithout(selectedCurrency).map((currency) => (
              <button
                key={currency}
                className="hover:bg-slate-200 w-full text-left px-3 py-2"
                onClick={(event) => onOptionClick(event, currency)}
              >
                {currency}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrencySelection;
