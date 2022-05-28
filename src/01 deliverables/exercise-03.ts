console.log("************** DELIVERABLE 03 *********************");

/* Function which clones an object */
const clone = (source: object): object => {
  const newObject: object = {};

  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      let element: any = source[key];

      if (typeof element === "object") 
        element = clone(element);

      newObject[key] = element;
    }
  }

  return newObject;
};

/* Function which combines two objects */
const merge = (source: object, target: object): { [key: string]: any } => {
  return {
    ...clone(target),
    ...clone(source),
  };
};

const a = {
  name: "Maria",
  surname: "Ibañez",
  country: { id: 1, value: "SPA" },
};

const b = {
  name: "Luisa",
  age: 31,
  married: true,
  country: { id: 2, value: "GBP" },
};

// console.log("** MERGE CLONE **");
// console.log("Merge clone: ", merge(a, b));
// console.log("Original a object: ", a);
// console.log("Original b object: ", b);
// console.log("----------------------------------");

