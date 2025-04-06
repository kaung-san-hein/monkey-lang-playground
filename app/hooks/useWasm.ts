import { useEffect } from "react";

export function useWasm() {
  useEffect(() => {
    const runWasm = async () => {
      const go = new window.Go();

      try {
        const result = await WebAssembly.instantiateStreaming(
          fetch("/main.wasm"),
          go.importObject
        );
        go.run(result.instance);
      } catch (error) {
        console.error("Error loading WASM:", error);
      }
    };

    const script = document.createElement("script");
    script.src = "/wasm_exec.js";
    script.onload = runWasm;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
}
