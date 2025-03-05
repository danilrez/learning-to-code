const sqrtApproximation = (number) =>
  number ** 0.5 % 1 === 0
    ? number ** 0.5
    : [(number ** 0.5) | 0, Math.ceil(number ** 0.5)];
