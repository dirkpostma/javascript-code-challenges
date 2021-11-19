const solution = (N, A) => {
  const counters = new Array(N).fill(0);
  let max = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === N + 1) {
      counters.fill(max);
    } else {
      counters[A[i] - 1] += 1;
      max = Math.max(max, counters[A[i] - 1]);
    }
  }

  return counters;
};

module.exports = {
  solution,
};
