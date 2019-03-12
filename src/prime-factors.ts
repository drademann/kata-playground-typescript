export function primeFactors(n: number): number[] {
  let factors: number[] = [];
  for (let candidate = 2; n > 1; candidate += 1) {
    for (; n % candidate == 0; n /= candidate) {
      factors.push(candidate);
    }
  }
  return factors;
}
