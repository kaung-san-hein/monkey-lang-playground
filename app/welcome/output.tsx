import { Button } from "~/components/button";

interface OutputProps {
  onClick: () => void;
  result: string;
}

export const Output = ({ onClick, result }: OutputProps) => {
  return (
    <div className="w-1/2 p-0 flex flex-col bg-gray-900 text-black overflow-auto">
      <div className="p-2 flex justify-start">
        <Button
          onClick={onClick}
          text="Reset"
          bgColor="bg-red-500"
          hoverColor="bg-red-600"
        />
      </div>
      <pre className="flex-1 p-3 bg-[#1E1E1E] text-white overflow-auto text-sm whitespace-pre-wrap">
        {result}
      </pre>
    </div>
  );
};
