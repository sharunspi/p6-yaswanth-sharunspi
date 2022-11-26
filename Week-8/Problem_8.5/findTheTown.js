const findTheJudge = function (number, trust) {
  const inDeg = new Array(number + 1).fill(0);
  const outDeg = new Array(number + 1).fill(0);
  trust.forEach(([a, b]) => {
    outDeg[a] = (outDeg[a] || 0) + 1;
    inDeg[b] = (inDeg[b] || 0) + 1;
  });
  for (let i = 1; i <= number; i++) {
    if (outDeg[i] === 0 && inDeg[i] === number - 1) {
      return i;
    }
  }
  return -1;
};
