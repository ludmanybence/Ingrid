import { RootState } from "@App/store";
import { Button, ErrorMessage } from "@Components";
import Historical from "@Pages/historical";
import Latest from "@Pages/latest";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const pages = {
  historical: () => <Historical />,
  latest: () => <Latest />,
} as const;

type Page = keyof typeof pages;

function App() {
  const conversionError = useSelector(
    (state: RootState) => state.converterSlice.error
  );
  const historicalError = useSelector(
    (state: RootState) => state.historicalSlice.error
  );

  const [error, setError] = useState<string | undefined>();

  const [shownTab, setShownTab] = useState<Page>("latest");

  useEffect(() => {
    const error = conversionError ?? historicalError ?? undefined;
    setError(error);
  }, [conversionError, historicalError]);

  return (
    <div className="w-full h-full flex flex-col">
      <ErrorMessage error={error} />
      <div className="flex w-full items-center justify-center mt-10">
        <div className="flex max-w-[500px] w-full justify-evenly">
          <Button onClick={() => setShownTab("latest")}>Latest</Button>
          <Button onClick={() => setShownTab("historical")}>Historical</Button>
        </div>
      </div>
      {pages[shownTab]()}
    </div>
  );
}

export default App;
