/**
  * @param object - object to traverse
  * @param key - keys to search for in object
  * @return map containing all found values
  */

function extractValuesForKey(object, searchKey) {
  let resultMap = new Map();
  let pathKey = "";
  let found = false;
 
  // traverse object tree
  const isObject = (value) => (value === null) ? false : (typeof value === 'object');
  
  const objectProps = (object) => {
    for (const prop in object) {
      // if searchkey -> set map
      if (prop === searchKey) {
        resultMap.set(pathKey, object[prop]);
        found = true;
      }
      // if value is object -> recursion
      if (isObject(object[prop])) {
        pathKey = prop;
          
        // recursion
        objectProps(object[prop]);
        if (found) {
          pathKey += `${prop}/`;
        }
      }
    }
  }
  //*  
  
  objectProps(object);  
  return resultMap;
}


const example1 = { uuid: 1, innerOne: { someKey: "some text" }, innerTwo: { uuid: 2, innerThree: { someOtherKey:
  "some other text", innerFour: { uuid: 3 }
} } };

const example2 = { uuid: 1, innerOne : { someKey: "some text" }, uuid: 2, innerThree : { someOtherKey: "some other text", innerFour : { uuid: 3 } } };

const example3 = { SomeObject: { uuid: 1, innerOne: { someKey: "some text" }, innerTwo: { uuid: 2, innerThree: { someOtherKey: "some other text", innerFour: { uuid: 3 } } } } };

console.log(extractValuesForKey(example1, 'uuid'));
console.log(extractValuesForKey(example2, 'uuid'));
console.log(extractValuesForKey(example3, 'uuid'));