interface Go {
  new (): Go;

  importObject: {
    [key: string]: WebAssembly.ImportBinding;
  };

  run(instance: WebAssembly.Instance): void;
}

declare global {
  interface Window {
    Go: Go;
    runCode: (input: string) => string;
  }
}

export {};
