const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const solution = (N) => {
  const result = [];
  for (let i = 0; i < N; i++) {
    result.push(multiply(i, i));
  }
  return result;
};

module.exports = {
  add,
  subtract,
  multiply,
  solution,
};
