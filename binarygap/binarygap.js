const solution = (n) => {
  const a = intToBinaryArray(n);

  let longest = 0;
  let count = 0;
  let inGap = false;
  let i = 0;

  while (i < a.length) {
    // at end of array
    if (i === a.length - 1) {
      if (a[i] === 1 && inGap) {
        longest = Math.max(longest, count);
      }
    } else {
      // not yet at end of array
      if (a[i] === 0 && !inGap) {
        // start of new (potential) gap
        inGap = true;
        count = 1;
      } else if (a[i] === 1 && inGap) {
        // end of a gap
        longest = Math.max(longest, count);
        count = 0;
      } else if (a[i] === 0 && inGap) {
        // still in gap, increment counter
        count++;
      } else if (a[i] === 1 && !inGap) {
        // not in gap, no start of gap
        count = 0;
      }
    }
    i++;
  }

  return longest;
};

// convert integer to binary representation as array of 0's and 1's
const intToBinaryArray = (N) => {
  return N.toString(2)
    .split("")
    .map((val) => parseInt(val));
};

module.exports = {
  solution,
  intToBinaryArray,
};
