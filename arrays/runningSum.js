// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// Example 2:
// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

// Example 3:
// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

const runningSum = (nums) => {
  return nums.map((num, index) => {
    return nums.slice(0, index + 1).reduce((a, b) => a + b, 0);
  });
};

console.log(runningSum([1, 2, 3, 4]));
console.log(runningSum([1, 1, 1, 1, 1]));
console.log(runningSum([3, 1, 2, 10, 1]));

// second approach without using slice and reduce
const findRunningSum = (nums) => {
  let sum = 0;
  return nums.map((num) => (sum += num));
};
console.log(findRunningSum([1, 2, 3, 4]));
console.log(findRunningSum([1, 1, 1, 1, 1]));
console.log(findRunningSum([3, 1, 2, 10, 1]));
