import { Button } from "@Components";
import { useEffect, useState } from "react";

interface Props {
  timestamp: number | undefined;
  refetch: () => unknown;
}

const StaleCheck = ({ refetch, timestamp }: Props) => {
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    if (timestamp) {
      const date = new Date(timestamp * 1000)
        .toLocaleString()
        .slice(0, 19)
        .replace("T", " ");

      setDate(date);
    }
  }, [timestamp]);

  return (
    <div className="flex flex-col text-center">
      {date && <>Time of current data: {date}</>}
      <Button variant="primary" onClick={refetch}>
        Refetch
      </Button>
    </div>
  );
};

export default StaleCheck;
