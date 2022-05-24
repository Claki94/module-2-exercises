interface User {
  name: string;
  age: number;
  country?: Country;
}

interface Country {
  id: number;
  value: string;
}

const isDeepEqual = (a: object, b: object): boolean => {
  if(Object.keys(a).length !== Object.keys(b).length)
    return false;
  
  for(const key in a) {
    if((a.hasOwnProperty(key) && !b.hasOwnProperty(key))
      || (typeof a[key] !== "object" && (a[key] !== b[key])))
        return false;
    
    if(typeof a[key] === "object") {
      const result: boolean = isDeepEqual(a[key], b[key]);
      if(!result)
        return false;
    }
  }

  return true;
}

const user: User = { name: "María", country: { id: 1, value: "ESP" }, age: 30 };
const clonedUser: User = { name: "María", age: 30, country: { id: 1, value: "ESP" } };

// console.log(isDeepEqual(user, clonedUser));