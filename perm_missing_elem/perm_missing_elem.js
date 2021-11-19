const solution = (A) => {
  const arr = Array(A.length + 1).fill(0);
  for (let i = 0; i < A.length; i++) {
    arr[A[i] - 1] = 1;
  }

  const emptySpot = arr.findIndex((elem) => elem === 0);
  if (emptySpot === -1) {
    return 1;
  } else {
    return emptySpot + 1;
  }
};

module.exports = {
  solution,
};
