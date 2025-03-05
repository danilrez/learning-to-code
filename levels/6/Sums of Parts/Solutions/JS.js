const partsSums = (ls) => {
  let total = ls.reduce((prev, curr) => prev + curr, 0);
  ls.unshift(0);
  return ls.map((val, i) => (total -= val));
};
