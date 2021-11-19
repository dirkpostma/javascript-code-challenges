const { solution } = require("./cyclic_rotation.js");

test("solution returns the input", () => {
  expect(solution([3, 8, 9, 7, 6], 3)).toStrictEqual([9, 7, 6, 3, 8]);
  expect(solution([3, 8, 9, 7, 6], 8)).toStrictEqual([9, 7, 6, 3, 8]);
  expect(solution([0, 0, 0], 2)).toStrictEqual([0, 0, 0]);
  expect(solution([-1, -2, 2], 1)).toStrictEqual([2, -1, -2]);
});
