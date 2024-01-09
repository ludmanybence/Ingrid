import { setAmount } from "@App/converter";
import { RootState } from "@App/store";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ConversionAmountInput = () => {
  const dispatch = useDispatch();

  const amount = useSelector((store: RootState) => store.converterSlice.amount);

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (amount === 0) {
      setInputValue("");
    } else {
      setInputValue(amount.toString());
    }
  }, [amount]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    const val = parseInt(e.target.value) || 0;
    dispatch(setAmount(val));
  };

  return (
    <label>
      Amount
      <input
        id="amount"
        className="w-full border-2 border-sky-400 rounded p-3"
        onChange={onChange}
        type="number"
        value={inputValue}
      />
    </label>
  );
};

export default ConversionAmountInput;
