export const formattedInput = (input: string): string => {
  let modifiedInput = input;

  modifiedInput = modifiedInput.replace(/\s+/g, " ");
  modifiedInput = modifiedInput.replace(/(\{[^}]*\})/g, (match) =>
    match.replace(/\n/g, " ").trim()
  );

  return modifiedInput;
};
