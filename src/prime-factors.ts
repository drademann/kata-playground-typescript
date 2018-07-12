export function primeFactors(n: number) {
  let factors: number[] = [];
  let number = n;
  let candidate = 2;
  while (number > 1) {
    while (number % candidate == 0) {
      factors = factors.concat(candidate);
      number /= candidate;
    }
    candidate += 1;
  }
  return factors;
}
