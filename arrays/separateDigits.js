// Given an array of positive integers nums, return an array answer that consists of the digits of each integer in nums after separating them in the same order they appear in nums.
// To separate the digits of an integer is to get all the digits it has in the same order.
// For example, for the integer 10921, the separation of its digits is [1,0,9,2,1].

// Example 1:
// Input: nums = [13,25,83,77]
// Output: [1,3,2,5,8,3,7,7]
// Explanation:
// - The separation of 13 is [1,3].
// - The separation of 25 is [2,5].
// - The separation of 83 is [8,3].
// - The separation of 77 is [7,7].
// answer = [1,3,2,5,8,3,7,7]. Note that answer contains the separations in the same order.

// Example 2:
// Input: nums = [7,1,3,9]
// Output: [7,1,3,9]
// Explanation: The separation of each integer in nums is itself.
// answer = [7,1,3,9].

const separateDigits = (nums) => {
  let ans = [];
  nums.forEach((num) => {
    const numToString = num.toString();
    if (numToString.length > 1) {
      const values = numToString.split("");
      ans.push(...values);
    } else {
      ans.push(numToString);
    }
  });
  return ans.map((value) => parseInt(value));
};

console.log(separateDigits([13, 25, 83, 77]));
console.log(separateDigits([7, 1, 3, 9]));

// using flatmap
const separatingDigits = (nums) => {
  return nums.flatMap((num) => {
    if (num.toString().length > 1) {
      const values = num.toString().split("");
      return values.map((value) => parseInt(value));
    } else {
      return parseInt(num);
    }
  });
};

console.log(separatingDigits([13, 25, 83, 77]));
console.log(separatingDigits([7, 1, 3, 9]));

// using join and split
const separateNumbers = (nums) => {
  const values = nums.join("").split("");
  return values.map((value) => parseInt(value));
};

console.log(separateNumbers([13, 25, 83, 77]));
console.log(separateNumbers([7, 1, 3, 9]));

// console.log([13, 25, 83, 77].join("").split(""));

// using number function to convert string to number
const separatingNumbers = (nums) => {
  return Array.from(nums.join(""), Number);
};

console.log(separatingNumbers([13, 25, 83, 77]));
console.log(separatingNumbers([7, 1, 3, 9]));
