console.log("************** DELIVERABLE 01 *********************");

const numberArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

/* Function which returns the first element of an array using destructuring */
const head = (array: any[]): any => {
    if(!Array.isArray(array))
      return;

    const [firstElement] = array;
    return firstElement;
}

// console.log("** HEAD EXERCISE **");
// console.log("Original: ", numberArray);
// console.log("First element: ", head(numberArray));
// console.log("----------------------------------");

/* Function which returns the array without the first element */
const tail = (array: any[]): any[] => {
  if(!Array.isArray(array))
    return;

  const [, ...restElements] = array;
  return restElements;
}

// console.log("** TAIL EXERCISE **");
// console.log("Original: ", numberArray);
// console.log("Tail: ", tail(numberArray));
// console.log("----------------------------------");

/* Function which returns the array without the last element */
const init = (array: any[]): any[] => {
  if(!Array.isArray(array))
  return;
  
  const copyArray: any[] = [...array];
  copyArray.splice(-1, 1);
  
  return copyArray;
}

// console.log("** INIT EXERCISE **");
// console.log("Original: ", numberArray);
// console.log("Init: ", init(numberArray));
// console.log("----------------------------------");

/* Function which returns the last element of an array */
const last = (array: any[]): any => {
  if(!Array.isArray(array))
  return;
  
  return array[array.length-1];
}

// console.log("** LAST EXERCISE **");
// console.log("Original: ", numberArray);
// console.log("Last: ", last(numberArray));
// console.log("----------------------------------");