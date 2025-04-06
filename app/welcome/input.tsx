import { Editor } from "@monaco-editor/react";
import { Button } from "~/components/button";

interface InputProps {
  onClick: () => void;
  code: string;
  onChange: (value: string | undefined) => void;
}

export const Input = ({ onClick, code, onChange }: InputProps) => {
  return (
    <div className="w-1/2 border-r border-white">
      <div className="p-2 flex justify-end bg-gray-900">
        <Button
          onClick={onClick}
          text="Run"
          bgColor="bg-blue-600"
          hoverColor="bg-blue-700"
        />
      </div>
      <Editor
        height="100%"
        theme="vs-dark"
        value={code}
        onChange={onChange}
      />
    </div>
  );
};
