import values from "./values.js";

type AnyFunctionOneArg = (arg: any) => any;

const getAverageText = (averageGrade: number): string => {
  if(averageGrade === 10)
    return "Matrícula de Honor";
  else if(averageGrade >= 9 && averageGrade < 10)
    return "Sobresaliente";
  else if(averageGrade >= 7 && averageGrade < 9)
    return "Notable";
  else if(averageGrade >= 6 && averageGrade < 7) 
    return "Bien";
  else if(averageGrade >= 5 && averageGrade < 6)
    return "Suficiente";
  else if(averageGrade >= 4 && averageGrade < 5)
    return "Insuficiente";
  else 
    return "Muy deficiente";
}

const calculateAverageGrade = (resultsArray: number[]): number => {
  const totalGrades: number = resultsArray.reduce((acc, value) => acc + value);
  return totalGrades / resultsArray.length;
}

const compose = (...funcs: AnyFunctionOneArg[]) => 
  funcs.reduce((acc: AnyFunctionOneArg, value: AnyFunctionOneArg) => (x) => value(acc(x)));

const printAverage = (classResults: {[key: string]: number}): string => {
  const composeFunc: AnyFunctionOneArg = compose(values, calculateAverageGrade, getAverageText);
  return composeFunc(classResults);
}

// console.log(printAverage({
//   David: 8.25,
//   Maria: 9.5,
//   Jose: 6.75,
//   Juan: 5.5,
//   Blanca: 7.75,
//   Carmen: 8,
// }));