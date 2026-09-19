import capitalize from "./capitalize";

test("Capitalize first letter", () => {
  expect(capitalize("bARney")).toBe("Barney");
});
