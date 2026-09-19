import calculator from "./calculator";

test("Add", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("Subtract", () => {
  expect(calculator.subtract(5, 2)).toBe(3);
});

test("Multiply", () => {
  expect(calculator.multiply(2, 6)).toBe(12);
});

test("Divide", () => {
  expect(calculator.divide(12, 2)).toBe(6);
});
