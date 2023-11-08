// Create a function to convert roman numeral to integer.
// Example 1:
// Input: s = "III”
// Output: 3
// Explanation: III = 3.
// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

const convertRomanToInteger = (input) => {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  let currentChar;
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    if (currentChar === input[i]) {
      count++;

      if (count > 1 && roman[input[i + 1]] > roman[input[i]]) {
        return "Invalid input";
      }
    } else {
      currentChar = input[i];
      count = 1;
    }

    if (i > 0 && roman[input[i]] > roman[input[i - 1]]) {
      result = result + roman[input[i]] - roman[input[i - 1]] * 2;
    } else {
      result += roman[input[i]];
    }
  }

  return result;
};

console.log(convertRomanToInteger("IV"));
console.log(convertRomanToInteger("V"));
console.log(convertRomanToInteger("VI"));
console.log(convertRomanToInteger("LVIII")); // 58
console.log(convertRomanToInteger("MCMXCIV")); // 1994
console.log(convertRomanToInteger("IIIX")); // invalid
