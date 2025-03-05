export function partsSums(ls: number[]): number[] {
  let total = ls.reduce((acc, cur) => acc + cur, 0);
  return [...[total], ...ls.map((num) => (total -= num))];
}
