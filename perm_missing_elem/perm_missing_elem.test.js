const { solution } = require("./perm_missing_elem.js");

test("solution returns missing element", () => {
  expect(solution([2, 3, 1, 5])).toStrictEqual(4);
  expect(solution([2, 3])).toStrictEqual(1);
  expect(solution([])).toStrictEqual(1);
  expect(solution([2, 3, 4])).toStrictEqual(1);
  expect(solution([1, 2, 3, 4])).toStrictEqual(5);
  expect(solution([2, 3, 4, 5])).toStrictEqual(1);
});
