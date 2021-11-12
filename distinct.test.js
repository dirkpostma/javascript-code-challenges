const { solution } = require("./distinct.js");

// Write a function
// function solution(A);
//  that, given an array A consisting of N integers, returns the number
// of distinct values in array A.

//  For example, given array A consisting of six elements such that:
//  A[0] = 2    A[1] = 1    A[2] = 1
//  A[3] = 2    A[4] = 3    A[5] = 1
// the function should return 3, because there are 3 distinct values
// appearing in array A, namely 1, 2 and 3.

// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [0..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

test("solution returns correct output for N is an integer within the range [0..100,000]", () => {
  expect(solution([2, 1, 1, 2, 3, 1])).toStrictEqual(3);
  expect(solution([])).toStrictEqual(0);
  expect(solution([1])).toStrictEqual(1);
  expect(solution([3])).toStrictEqual(1);
  expect(solution([1, 3])).toStrictEqual(2);
  expect(solution([1, 1, 3, 4, 4])).toStrictEqual(3);
  expect(solution([1, 1, 1])).toStrictEqual(1);
});

test("solution returns correct output for N is an integer within the range [-1,000,000..1,000,000]", () => {
  expect(solution([-200, -1, 1, 2, 3, 1, -200])).toStrictEqual(5);
});
