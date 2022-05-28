console.log("************** DELIVERABLE 02 *********************");

const array1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2: string[] = ["hola", "adios", "bye", "hello"];
const array3: boolean[] = [true, false, false, true];

/* Function which returns a new array that concat 2 other arrays */
const concat = <T, S>(a: T[], b: S[]): (T | S)[] => {
  return [...a, ...b];
};

// console.log("** CONCAT TWO ARRAYS **");
// console.log(concat<number, string>(array1, array2));
// console.log("----------------------------------");

/* Function which returns a new array that concat multiples arrays */
const concatMultiple = <T extends any[]>(...arrays: T): any[] => {
  return arrays.reduce((acc, value) => [...acc, ...value]);
};

// console.log("** CONCAT MULTIPLE ARRAYS **");
// console.log(concatMultiple(array1, array2, array3));
// console.log("----------------------------------");
