console.log("** DEEP GET **");

const myObject: object = {
  a: 1,
  b: {
    c: null,
    d: {
      e: 3,
      f: {
        g: "bingo",
      },
    },
  },
};

/* Function which returns the value of an object regardless of the depth of the key */
const deepGet = (customObject: object, ...keys: string[]): unknown => {
  if (keys.length === 0) 
    return customObject;

  const value: unknown = customObject[keys.shift()];

  if (keys.length === 0) 
    return value;
  else if (typeof value === "object")
    return deepGet(value, ...keys);
};

// console.log(deepGet(myObject, "x")); // undefined
// console.log(deepGet(myObject, "a")); // 1
// console.log(deepGet(myObject, "b")); // { c: null, d: {....}}
// console.log(deepGet(myObject, "b", "c")); // null
// console.log(deepGet(myObject, "b", "d", "f", "g")); // bingo
// console.log(deepGet(myObject)); // {a: 1, b: {...}}

console.log("** DEEP SET **");

const myObject2: object = {};

/* Function which set a key/value pair of an object regardless the required depth */
const deepSet = (value: unknown, customObject: object,...keys: string[]): void => {
  if(keys.length === 0)
    return;
  
  const key: string = keys.shift();

  if(keys.length === 0) 
    customObject[key] = value;
  else {
    if(typeof customObject[key] !== "object")
      customObject[key] = {};
    deepSet(value, customObject[key], ...keys);
  }
};

// deepSet(1, myObject2, "a", "b");
// console.log(JSON.stringify(myObject2)); // {a: { b: 1}}
// deepSet(2, myObject2, "a", "c");
// console.log(JSON.stringify(myObject2)); // {a: { b: 1, c: 2}}
// deepSet(3, myObject2, "a");
// console.log(JSON.stringify(myObject2)); // {a: 3}
// deepSet(4, myObject2);
// console.log(JSON.stringify(myObject2)); // Do nothing // {a: 3}
