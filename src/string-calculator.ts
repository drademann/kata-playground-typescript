export function stringCalculate(input: string): number {
  if (doesStartWithCustomDelimiter(input)) {
    return new StringCalculator(
      input.substring(3),
      ",",
      "\n",
      input.charAt(2)
    ).calculate();
  }
  return new StringCalculator(input, ",", "\n").calculate();
}

function doesStartWithCustomDelimiter(input: string) {
  return input.lastIndexOf("//", 0) == 0;
}

class StringCalculator {
  private delimiters: string[];

  constructor(readonly input: string, ...delimiters: string[]) {
    this.delimiters = delimiters;
  }

  calculate(): number {
    return this.input
      .split(this.delimiterRegExp())
      .map(s => Number(s))
      .map(n => {
        if (n < 0) throw new EvalError();
        return n;
      })
      .filter(n => n <= 1000)
      .reduce((a, n) => a + n);
  }

  private delimiterRegExp() {
    return RegExp(`[${this.delimiters.join("")}]`);
  }
}
