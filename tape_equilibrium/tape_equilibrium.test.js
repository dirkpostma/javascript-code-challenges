const { solution } = require("./tape_equilibrium.js");

test("solution returns minium difference that acn be achieved", () => {
  expect(solution([3, 1, 2, 4, 3])).toStrictEqual(1);
  expect(solution([5, 6, 2, 4, 1])).toStrictEqual(4);
  expect(solution([10, 5])).toStrictEqual(5);
  expect(solution([10, 5, 3])).toStrictEqual(2);
  expect(solution([-1000, 1000])).toStrictEqual(2000);
});
