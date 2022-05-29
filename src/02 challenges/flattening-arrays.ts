console.log("** FLATTENING ARRAYS **"); 

const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]], [[10, 11, 12, [13]], [14, 15,[16, 17]]]];

/* Function which returns a flat array from a multidimensional array */
const flattArray = (array: any[]): any[] => {
  let result: any[] = [];

  array.forEach(element => {
    if(Array.isArray(element))
      result = [...result, ...flattArray(element)];
    else
      result.push(element);
  });

  return result;
}

// console.log(flattArray(sample));