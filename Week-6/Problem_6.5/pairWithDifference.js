function pairWithDifference(arr, element) {
  let length = arr.length;
  for (let i = 0; i <= length; i++) {
    for (let j = 0; j <= length; j++) {
      if (i !== j) {
        if (arr[i] - arr[j] === element) {
          return 1;
        }
      }
    }
  }
  return 0;
}

// Time complaxity : O(n^2)
// Space complaxity : O(1)

// Example 1
let val = [5, 10, 3, 2, 50, 80];
let ele = 78;
console.log(pairWithDifference(val, ele));
// Example 2
let val1 = [5, 10, 3, 2, 50, 10];
let ele1 = 78;
console.log(pairWithDifference(val1, ele1));
