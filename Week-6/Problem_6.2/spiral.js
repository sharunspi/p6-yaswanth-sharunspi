function spiral(arg) {
  let final = [];
  let length = arg.length;
  let subLength = arg[0].length;
  let p = 0;
  let i;
  let q = 0;
  while (p < length && q < subLength) {
    for (i = q; i < subLength; ++i) {
      final.push(arg[p][i]);
    }
    p++;
    for (i = p; i < length; ++i) {
      final.push(arg[i][subLength - 1]);
    }
    subLength--;
    if (p < length) {
      for (i = subLength - 1; i >= subLength; --i) {
        final.push(arg[length - 1][i]);
      }
      length--;
    }
    if (q < subLength) {
      for (i = length - 1; i >= p; --i) {
        final.push(arg[i][q]);
      }
      q++;
    }
  }

  return final;
}

console.log(
  spiral([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
