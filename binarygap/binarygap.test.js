const { solution, intToBinaryArray } = require("./index.js");

// A binary gap within a positive integer N is any maximal sequence of
// consecutive zeros that is surrounded by ones at both ends in the
// binary representation of N.

// For example, number 9 has binary representation 1001 and contains a
// binary gap of length 2. The number 529 has binary representation
// 1000010001 and contains two binary gaps: one of length 4 and
// one of length 3. The number 20 has binary representation 10100 and
// contains one binary gap of length 1. The number 15 has binary
// representation 1111 and has no binary gaps. The number 32 has
// binary representation 100000 and has no binary gaps.

// Write a function:
// function solution(N);
// that, given a positive integer N, returns the length of its longest
// binary gap. The function should return 0 if N doesn't contain a
// binary gap.

// For example, given N = 1041 the function should return 5, because
// N has binary representation 10000010001 and so its longest binary
// gap is of length 5. Given N = 32 the function should return 0,
// because N has binary representation '100000' and thus no binary gaps.

// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..2,147,483,647].

test("solution returns correct output", () => {
  expect(solution(9)).toStrictEqual(2);
  expect(solution(529)).toStrictEqual(4);
  expect(solution(20)).toStrictEqual(1);
  expect(solution(15)).toStrictEqual(0);
  expect(solution(1041)).toStrictEqual(5);
  expect(solution(32)).toStrictEqual(0);
});

test("intToBinaryArray returns array with bnary representaion of input", () => {
  expect(intToBinaryArray(0)).toStrictEqual([0]);
  expect(intToBinaryArray(1)).toStrictEqual([1]);
  expect(intToBinaryArray(2)).toStrictEqual([1, 0]);
  expect(intToBinaryArray(3)).toStrictEqual([1, 1]);
  expect(intToBinaryArray(4)).toStrictEqual([1, 0, 0]);
  expect(intToBinaryArray(5)).toStrictEqual([1, 0, 1]);
  expect(intToBinaryArray(1025)).toStrictEqual([
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  ]);
  expect(intToBinaryArray(529)).toStrictEqual([1, 0, 0, 0, 0, 1, 0, 0, 0, 1]);
  expect(intToBinaryArray(20)).toStrictEqual([1, 0, 1, 0, 0]);
});
