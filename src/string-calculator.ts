export function stringCalculate(input: string): number {
  if (input.startsWith("//")) {
    const remainingInput = input.substring(3);
    return new StringCalculator(
      remainingInput,
      delimitersWith(customDelimiter(input))
    ).calculate();
  }
  return new StringCalculator(input).calculate();
}

function customDelimiter(input: string): string {
  return input.charAt(2);
}

function delimitersWith(customDelimiter: string): string[] {
  return [",", "\n", customDelimiter];
}

class StringCalculator {
  private delimiters: string[];

  constructor(private input: string, delimiters: string[] = [",", "\n"]) {
    this.delimiters = delimiters;
  }

  calculate(): number {
    return this.input
      .split(RegExp(`[${this.delimiters.join("")}]`))
      .map(this.toNumber)
      .filter(n => n <= 1000)
      .reduce((p, c) => p + c);
  }

  private toNumber(s: string) {
    let n = Number(s);
    if (n < 0) {
      throw new EvalError();
    }
    return n;
  }
}
