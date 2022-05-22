const checkArguments = (input?: string): string => {
  const result: string = input || (input === null ? "" : "Unknown")
  return result;
}

// console.log(checkArguments("marcelo"));