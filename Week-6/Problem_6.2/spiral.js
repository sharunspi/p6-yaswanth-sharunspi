function spiral(arr, m, n) {
  let i;
  let p = 0;
  let q = 0;
  let final = [];
  // p => row start index
  // q => column start index
  // m => end row ; starting with row length
  // n => end column ; starting with column length
  // i => intrators

  while (p < m && q < n) {
    // first row
    for (i = q; i < n; ++i) {
      final.push(arr[p][i]);
    }
    // increase row index by 1
    p++;
    // last column
    for (i = p; i < m; ++i) {
      final.push(arr[i][n - 1]);
    }
    // decrease column end by 1
    n--;
    if (p < m) {
      for (i = n - 1; i >= q; --i) {
        final.push(arr[m - 1][i]);
      }
      // decrease end of row by 1
      m--;
    }
    if (q < n) {
      for (i = m - 1; i >= p; --i) {
        final.push(arr[i][q]);
      }
      // increase column start by 1
      q++;
    }
  }

  return final;
}

// Time complaxity : O(m*n)
// Space complaxity : O(1)

// arguments is (array, no of rows, no of columns)
let array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let noOfRows = array.length;
let noOfColumns = array[0].length;
console.log(spiral(array, noOfRows, noOfColumns));
