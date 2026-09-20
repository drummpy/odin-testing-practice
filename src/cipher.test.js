import cipher from "./cipher";

test("Offset by amount", () => {
  expect(cipher("abc", 3)).toBe("def");
});

test("Wrap lowercase", () => {
  expect(cipher("xyz", 3)).toBe("abc");
});

test("Offset uppercase", () => {
  expect(cipher("HeLLo", 3)).toBe("KhOOr");
});

test("Wrap upercase", () => {
  expect(cipher("XYZ", 3)).toBe("ABC");
});

test("Cipher test", () => {
  expect(cipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
