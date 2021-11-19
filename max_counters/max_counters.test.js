const { solution } = require("./max_counters.js");

test("solution returns the input", () => {
  expect(solution(5, [3,4,4,6,1,4,4])).toStrictEqual([3, 2, 2, 4, 2]);
});
