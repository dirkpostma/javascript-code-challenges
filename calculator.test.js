const { expect } = require("@jest/globals");
const { add, subtract, multiply, solution } = require("./calculator");

test("Adding two numbers", async () => {
  expect(add(5, 5)).toStrictEqual(10);
  expect(add(100, 200)).toStrictEqual(300);
});

test("Subtracting two numbers", async () => {
  expect(subtract(10, 10)).toStrictEqual(0);
  expect(subtract(200, 100)).toStrictEqual(100);
});

test("Multiplying two numbers", async () => {
  expect(multiply(10, 10)).toStrictEqual(100);
  expect(multiply(200, 100)).toStrictEqual(20000);
});

test("solution prints N squared numbers", () => {
  const result = solution(4);
  expect(result).toStrictEqual([0, 1, 4, 9]);
});
