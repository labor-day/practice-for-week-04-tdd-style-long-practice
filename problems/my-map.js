function myMap(inputArray, callback) {
  // Your code here
  let mapped = [];
  inputArray.forEach( element => mapped.push(callback(element)) );
  return mapped;
}

module.exports = myMap;
