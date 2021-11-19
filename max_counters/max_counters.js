const solution = (N, A) => {
  const counters = new Array(N).fill(0);
  let max = 0;
  let last_fill_max = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === N + 1) {
      last_fill_max = max;
    } else {
      if (counters[A[i] - 1] < last_fill_max) {
        counters[A[i] - 1] = last_fill_max + 1;
      } else {
        counters[A[i] - 1] += 1;
      }
      max = Math.max(max, counters[A[i] - 1]);
    }
  }

  return counters.map((value) => Math.max(value, last_fill_max));
};

module.exports = {
  solution,
};
