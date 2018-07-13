export function stringCalculate(input: string): number {
  return input
    .split(",")
    .map(s => Number(s))
    .reduce((a, n) => a + n);
}
