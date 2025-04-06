import { useState } from "react";
import { useWasm } from "~/hooks/useWasm";
import {
  initStateEditorMessage,
  initStateOutputMessage,
} from "~/utils/constant";
import { formattedInput } from "~/utils/formattedInput";
import { Header } from "./header";
import { Input } from "./input";
import { Output } from "./output";

export function Welcome() {
  const [code, setCode] = useState(initStateEditorMessage);
  const [result, setResult] = useState(initStateOutputMessage);

  useWasm();

  const handleClear = () => {
    setCode(initStateEditorMessage);
    setResult(initStateOutputMessage);
  };

  const handleChange = (value: string | undefined) => {
    setCode(value ?? "");
  };

  const handleRun = () => {
    const format = formattedInput(code);

    if (window.runCode) {
      setResult("");

      const result = window.runCode(format);

      if (result !== null) {
        setResult(result);
      }
    } else {
      setResult("WASM not loaded yet.");
    }
  };

  return (
    <main className="h-screen flex flex-col bg-gray-900 text-white">
      <Header />

      <div className="flex-1 flex overflow-hidden">
        <Input onClick={handleRun} code={code} onChange={handleChange} />

        <Output onClick={handleClear} result={result} />
      </div>
    </main>
  );
}
