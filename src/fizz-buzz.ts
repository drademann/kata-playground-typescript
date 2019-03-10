export function fizzBuzz(...numbers: number[]): string[] {
  return numbers.map(n => {
    if (n % 3 == 0) return "Fizz";
    else if (n % 5 == 0) return "Buzz";
    else return n.toString();
  });
}
