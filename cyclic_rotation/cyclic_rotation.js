const solution = (A, K) => {
  const modK = K % A.length;
  const result = Array(A.length);

  for (let i = 0; i < modK; i++) {
    result[i] = A[A.length - modK + i];
  }
  for (let i = modK; i < A.length; i++) {
    result[i] = A[i - modK];
  }
  return result;
};

module.exports = {
  solution,
};
