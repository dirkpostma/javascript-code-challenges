const { solution } = require("./echo.js");

test("solution returns the input", () => {
  expect(solution(2)).toStrictEqual(2);
  expect(solution(345678)).toStrictEqual(345678);
});
