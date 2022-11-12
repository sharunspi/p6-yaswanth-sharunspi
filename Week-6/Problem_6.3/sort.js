function sortArray(arr) {
  initialization;
  let length = arr.length;
  let num0 = [];
  let num1 = [];
  let num2 = [];

  for (let i = 0; i <= length; i++) {
    if (arr[i] === 0) {
      num0.push(0);
    } else if (arr[i] === 1) {
      num1.push(1);
    } else if (arr[i] === 2) {
      num2.push(2);
    }
  }
  // concatinating arrays
  return [...num0, ...num1, ...num2];
}

// Time complaxity : O(n)
// Space complaxity : O(0)

console.log(sortArray([1, 0, 0, 1, 2, 1]));
