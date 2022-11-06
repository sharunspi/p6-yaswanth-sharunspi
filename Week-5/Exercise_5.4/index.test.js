const operations = require("./index");

// sum
test("adding to two numbers to get sum", () => {
  expect(operations.sum(10, 10)).toBe(20);
});
// difference
test("difference of two numbers", () => {
  expect(operations.diff(10, 10)).toBe(0);
});
// product
test("product of twp numbers", () => {
  expect(operations.product(10, 10)).toBe(100);
});
