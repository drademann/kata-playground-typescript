export function primeFactors(number) {
    let factors: number[] = [];
    if (number > 1) {
        factors = factors.concat(number)
    }
    return factors;
}