import { morseCodeToChar, charToMorseCode } from "./morse-code-list";

export function decode(morseCode: string): string {
  return morseCode
    .split("   ")
    .map(word =>
      word
        .split(" ")
        .map(morseCodeToChar)
        .join("")
    )
    .join(" ");
}
