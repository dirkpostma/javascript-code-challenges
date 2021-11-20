const DEBUG = false;

const solution = (S) => {
  const arr = S.split("");
  const stack = [];
  log(arr);

  for (c of arr) {
    log("begin", { c, stack });
    if (c === "(" || c === "[" || c === "{") {
      stack.push(c);
      log({ c, stack });
    } else if (c === ")") {
      if (stack.pop() !== "(") {
        return 0;
      }
    } else if (c === "]") {
      if (stack.pop() !== "[") {
        return 0;
      }      
    } else if (c === "}") {
      if (stack.pop() !== "{") {
        return 0;
      }      
    } else {
      return 0
    }
    log("end", { stack });
  }

  if (stack.length !== 0) {
    return 0
  }

  return 1;
};

module.exports = {
  solution,
};

const log = (...args) => {
  if (DEBUG) {
    console.log(...args);
  }
};
