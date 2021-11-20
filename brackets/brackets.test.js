const { solution } = require("./brackets.js");

test("solution returns the input", () => {
  // expect(solution("")).toStrictEqual(1);
  // expect(solution("()")).toStrictEqual(1);
  // expect(solution("[]")).toStrictEqual(1);
  // expect(solution("{}")).toStrictEqual(1);
  // expect(solution("{}()")).toStrictEqual(1);
  // expect(solution("{}([])")).toStrictEqual(1);
  // expect(solution("{[()()]}")).toStrictEqual(1);
  // expect(solution("([)()]")).toStrictEqual(0);
  expect(solution("{{{{")).toStrictEqual(0);
});
