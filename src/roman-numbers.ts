const romanNumbers: [number, string][] = [
  [1, "I"],
  [4, "IV"],
  [5, "V"],
  [9, "IX"],
  [10, "X"],
  [40, "XL"],
  [50, "L"],
  [90, "XC"],
  [100, "C"],
  [400, "CD"],
  [500, "D"],
  [900, "CM"],
  [1000, "M"]
];

export function asRomanNumber(n: number): string {
  let i = romanNumbers.length - 1;
  let roman = "";
  while (i >= 0) {
    while (n >= romanNumbers[i][0]) {
      roman += romanNumbers[i][1];
      n -= romanNumbers[i][0];
    }
    i -= 1;
  }
  return roman;
}
