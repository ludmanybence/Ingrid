import { useEffect, useState } from "react";

interface Props {
  error: string | undefined;
}

const ErrorMessage = ({ error }: Props) => {
  const [isShown, setIsShown] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (error) {
      setIsShown(true);
      setMessage(error);
    }
  }, [error]);

  return isShown ? (
    <div className="bg-red-500 text-white w-full flex justify-between py-2 px-5 items-center">
      {message}
      <button
        onClick={() => setIsShown(false)}
        className="w-[30px] h-[30px] border-red-500 bg-red-600 rounded border-2 hover:bg-red-400 hover:border-red-200 transition duration-75"
      >
        &#10005;
      </button>
    </div>
  ) : null;
};

export default ErrorMessage;
