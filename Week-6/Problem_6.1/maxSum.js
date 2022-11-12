function maxSumSubArray(arg) {
  let length = arg.length;
  //   initializations;
  let maximum = 0,
    maximumEnd = 0;
  for (let i = 0; i <= length; i++) {
    maximumEnd = maximumEnd + arg[i];
    // checking whether maximum value is less than end value
    if (maximum < maximumEnd) {
      maximum = maximumEnd;
    }
    if (maximumEnd < 0) {
      maximumEnd = 0;
    }
  }
  return maximum;
}

// Time complaxity : O(n)
// Space complaxity : O(1)

console.log(maxSumSubArray([1, 2, 4, -5, 4, 1, 455, 45]));
