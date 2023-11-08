// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown →
// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:
// Input: numRows = 1
// Output: [[1]]

const pascalTriangle = (row) => {
  if (!row || row < 1) {
    return "Invalid input";
  }

  const result = [[1]];
  if (row === 1) return result;

  for (let i = 2; i <= row; i++) {
    const currentArray = new Array(i).fill(1);
    // i = 2 -> [1,1]
    // i = 3 -> [1,1,1]

    if (i > 2) {
      for (let j = 1; j < currentArray.length - 1; j++) {
        const lastResult = result[result.length - 1];
        currentArray[j] = lastResult[j] + lastResult[j - 1];
      }
    }

    result.push(currentArray);
  }

  return result;
};

console.log(pascalTriangle(5));
console.log(pascalTriangle(1));
console.log(pascalTriangle(2));
console.log(pascalTriangle(25));
