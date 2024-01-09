import { ReactNode } from "react";

interface Props {
  header: ReactNode;
  children: ReactNode[];
}

const ResultsContainer = ({ header, children }: Props) => {
  return (
    <div className="justify-center border-2 border-sky-500 rounded-xl overflow-hidden flex flex-col bg-zinc-50 ">
      <div className="bg-sky-600 text-center text-white min-h-24 flex items-center p-2 justify-center">
        {header}
      </div>

      <div className=" flex flex-col m-auto p-5">{children}</div>
    </div>
  );
};

export default ResultsContainer;
