// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.
// Example 1:
// Input: nums = [3,2,3]
// Output: 3
// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

const returnMajorityElement = (arr) => {
  if (!arr || arr.length < 2) {
    return "Invalid array input";
  }

  const countResult = {};
  const minAppear = Math.floor(arr.length / 2);

  for (const item of arr) {
    countResult[item] = (countResult[item] || 0) + 1;
  }

  for (const key in countResult) {
    if (countResult[key] > minAppear) {
      console.log(typeof key);
      return Number(key);
      // return key;
    }
  }

  return "No majority element found";
};

console.log(returnMajorityElement([3, 2]));
console.log(returnMajorityElement([3, 2, 3]));
console.log(returnMajorityElement([2, 2, 1, 1, 1, 2, 2]));
