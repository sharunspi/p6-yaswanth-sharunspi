// function to muliply given arguments
// example 1,2,3 ==> 1*2*3

function multiply(...args) {
  return args.reduce((a, b) => a * b);
}

// memorization function
function memorize(func) {
  // store to cache the data
  const store = new Map();
  return function (...args) {
    // creating key to store the result
    // example 1,2,3 ==> 1-2-3
    const keyId = args.join("-");
    let result;
    // checking for cached data
    if (store.has(keyId)) {
      result = store.get(keyId);
    }
    // setting if the cache data is not there
    store.set(keyId, func(...args));
    result = store.get(keyId);
    return console.log(result);
  };
}

// memorizing multipy function
const memorizeMultiply = memorize(multiply);

// example
memorizeMultiply(1, 2, 3, 4);
