const biggestWord = (phrase: string): string => {
  const phraseArray: string[] = phrase.split(" ");
  if(!phraseArray.length)
    return;

  return phraseArray.reduce((acc: string, value: string) => value.length > acc.length ? value : acc, "");
}

// console.log(biggestWord("Esta frase puede contener muchas palabras"));
// console.log(biggestWord("Ejercicios básicos de JavaScript"));