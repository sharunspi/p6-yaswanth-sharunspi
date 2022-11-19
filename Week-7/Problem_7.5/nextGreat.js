function nextGreaterElement(array, n) {
  var next, i, j;
  for (i = 0; i < n; i++) {
    next = -1;
    for (j = i + 1; j < n; j++) {
      if (array[i] < array[j]) {
        next = array[j];
        break;
      }
    }
    console.log(array[i] + " -- " + next);
  }
}

var newArray = [11, 13, 21, 3];
var n = newArray.length;
nextGreaterElement(newArray, n);

// ......
// Time Complexity : O(n^2)
// Space Complexity : O(1)
