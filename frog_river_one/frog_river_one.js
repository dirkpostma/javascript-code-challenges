const solution = (X, A) => {
  const leaves = {};

  let i = 0;
  let todo = X;
  while (i < A.length) {
    if (!leaves[A[i]]) {
      leaves[A[i]] = true;
      todo--;
    }

    if (todo === 0) {
      return i;
    }
    i++;
  }
  return -1;
};

module.exports = {
  solution,
};
