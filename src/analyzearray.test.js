import analyzearray from "./analyzearray";

test("Analyze array of numbers", () => {
  expect(analyzearray([1, 2, 3, 4, 5, 6])).toEqual({
    average: 3.5,
    min: 1,
    max: 6,
    length: 6,
  });
});
