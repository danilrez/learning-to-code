const findReverseNumber = (n) => {
  let c = 11;
  if (n < c) return n - 1;
  for (let digits = 2; ; digits++)
    for (
      let i = 10 ** (Math.ceil(digits / 2) - 1);
      i < 10 ** Math.ceil(digits / 2);
      i++, c++
    )
      if (n === c)
        return (
          i +
          (i + '')
            .split('')
            .reverse()
            .slice(digits % 2)
            .join('')
        );
};
