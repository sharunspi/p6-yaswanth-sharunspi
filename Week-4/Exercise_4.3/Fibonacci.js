function Fibonacci(n) {
  return {
    [Symbol.iterator]: function () {
      //   initiations
      let i = 1;
      let oldVal = 0;
      let newVal = 0;
      return {
        // next method to move to the next element
        next: function () {
          // do up to the gien number
          if (i++ <= n) {
            // relacing old value with new value and new value with the sum of old value and new value
            [oldVal, newVal] = [newVal, oldVal + newVal || 1];
            return {
              value: oldVal,
              done: false,
            };
          }
          //   close if the end is reached
          return { done: true };
        },
      };
    },
  };
}

// console.log([...Fibonacci(10)]);

function printFibonacci(num) {
  console.log("Fibonacci Series for " + num + " is :");
  for (let nmbr of Fibonacci(num)) {
    console.log(nmbr);
  }
}

// function to print finbonacci series
printFibonacci(10);
