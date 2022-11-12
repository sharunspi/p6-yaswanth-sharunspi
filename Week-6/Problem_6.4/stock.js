function stockMarket(arr) {
  let buyValue,
    sellValue = 0;
  let noOfDays = arr.length;
  // min value index
  let minValueIndex = arr.indexOf(Math.min(...arr));
  buyValue = arr[minValueIndex];
  for (let i = 0; i < noOfDays; i++) {
    if (i > minValueIndex) {
      if (sellValue < arr[i]) {
        sellValue = arr[i];
      }
    }
  }
  return sellValue - buyValue === -1 ? 0 : sellValue - buyValue;
}

// Time complaxity : O(n+n+n) = 0(3n)
// Space complaxity : O(1)

// Example 1
console.log(stockMarket([7, 1, 5, 3, 6, 4]));
// Example 2
console.log(stockMarket([7, 6, 4, 3, 2, 5, 1]));
