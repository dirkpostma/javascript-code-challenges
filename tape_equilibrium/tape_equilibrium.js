const solution = (A) => {
  let sumLeft = 0;
  let sumRight = A.reduce((a, b) => a + b, 0);
  let minimumDiff = +Infinity

  for (let i = 0; i < A.length - 1; i++) {
    sumLeft += A[i];
    sumRight -= A[i];
    const diff = Math.abs(sumLeft - sumRight);
    minimumDiff = Math.min(diff, minimumDiff);
  }

  return minimumDiff;
};

module.exports = {
  solution,
};
