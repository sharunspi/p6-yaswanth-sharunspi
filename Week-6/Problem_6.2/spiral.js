function spiral(arg) {
  let final = [];
  for (let i = 0; i <= arg.length; i++) {
    for (let j = 0; j <= 3; j++) {
      if (i < j) {
        final.push(arg[i][j]);
      }
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
