# The String Calculator Kata

Roy Osherove created this Kata:
[TDD Kata String Calculator](http://osherove.com/kata)

Step by step, you’re supposed to implement a function that takes a string containing numbers and calculates their sum.

__Remember__:

- Do TDD.
- Do one requirement at a time, don’t read ahead.
- Test first, there is no try.

## Task

Provide the following function

    add(string) int

## Requirements

1. The method returns `0` given an empty string.

       add("") == 0

2. The method returns the number when the string only contains a single number.

       add("6") == 6

3. Given the string contains two comma-separated numbers, then the method returns their sum.

       add("1,2") == 3

4. The method should deal with an arbitrary number of numbers as well.

       add("1,2,3,4,5") == 15

5. The method should allow new lines instead of commas between numbers.

       add("1\n2,3") == 6

6. Allow different delimiters.
   Given the input string starts with a comment line like `//[delim]\n[numbers...]`,
   then `delim` delimiter should work too:

       add("//;\n1;2") == 3`

7. If the input string contains a negative number, then throw an exception or return an error
   like `negatives not allowed` including the passed in negative number.

       add("-1,2,3") produces "negatives not allowed: -1"

8. If there are multiple negative numbers, then show them all within the exception or error.

       add("1,-2,-3") produces "negatives not allowed: -2, -3"

9. Add a function to the calculator that returns the count how many times the `add()` function was called.
   Implement it test-first, the TDD way.

       int GetCalledCount()

10. Ignore numbers bigger than 1000.

        add("1,1001,2") == 3

11. Allow delimiters of any length, like

        "//[***]\n1***2***3" == 6

12. Allow multiple delimiters, like

        "//[*][&]\n1*2&3" == 6

13. Still support delimiters of variable length, like

        "//[##][$]\n1$2##3" == 6