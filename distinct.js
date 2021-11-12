const solution = (a) => {
  const map = [];
  let count = 0;

  a.forEach((value, index) => {
    if (!map[value]) {
      map[value] = true;
      count++;
    }
  });

  return count;
};

module.exports = {
  solution,
};
