export const consecKprimes = (k: number, arr: number[]): number =>
  arr
    .map(v => {
      let nFactors = 0;
      let n = 2;

      while (v > 1) {
        if (v % n) {
          n++;
        } else {
          v /= n;
          nFactors++;
        }
      }

      return nFactors;
    })
    .filter((v, i, a) => v === k && a[i - 1] === k).length;