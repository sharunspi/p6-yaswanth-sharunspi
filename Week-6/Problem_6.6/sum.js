function sumThree(arr, element) {
  let sum = 0;
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      for (let k = j + 1; k < length; k++) {
        // sum of three elements
        let sum3 = arr[i] + arr[j] + arr[k];
        // checking the absolute difference and comparing
        if (Math.abs(element - sum) >= Math.abs(element - sum3)) {
          sum = sum3;
        }
      }
    }
  }
  return sum;
}

// Time complaxity : O(n^3)
// Space complaxity : O(1)

// Example 1
let val = [-1, 2, 1, -4];
let ele = 1;
console.log(sumThree(val, ele));
// Example 2
let val1 = [5, 10, 3, 2, 50, 10];
let ele1 = 11;
console.log(sumThree(val1, ele1));
