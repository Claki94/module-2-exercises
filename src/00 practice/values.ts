/* Function which returns a list of values of all the properties from an object. 
   In case of an instance, the prototype won't be returned */
const values = (obj: object) => {
  const objValues: unknown[] = [] 

  for (const key in obj) {
    if(obj.hasOwnProperty(key)) {
      const element: unknown = obj[key];
      objValues.push(element);
    }
  }

  return objValues;
}

// Constructor function Person
function Person(name: string) {
  this.name = name;
}

// Person prototype methods
Person.prototype.walk = (): void => {
  console.log("I'm walking");
};

const john = new Person("John");

console.log(values(john));
console.log(values({ id: 31, duration: 310, name: "long video", format: "mp4" }));

export default values;