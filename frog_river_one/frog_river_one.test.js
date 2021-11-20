const { solution } = require("./frog_river_one.js");

test("solution returns the input", () => {
  expect(solution(5, [1, 3, 1, 4, 2, 3, 5, 4])).toStrictEqual(6);
  expect(solution(5, [1, 2, 3])).toStrictEqual(-1);
  expect(solution(5, [1, 2, 3, 4, 5])).toStrictEqual(4);
  expect(solution(2, [2, 2, 2, 2, 2])).toStrictEqual(-1);
});
