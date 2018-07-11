export function primeFactors(number: number) {
    let factors: number[] = [];
    if (number % 2 == 0) {
        factors = [...factors, 2];
        number /= 2
    }
    if (number > 1) {
        factors = [...factors, number]
    }
    return factors;
}
