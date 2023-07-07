// Given two arrays of integers nums and index. Your task is to create target array under the following rules:
// Initially target array is empty.
// From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
// Repeat the previous step until there are no elements to read in nums and index.
// Return the target array.
// It is guaranteed that the insertion operations will be valid.

// Example 1:
// Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
// Output: [0,4,1,3,2]
// Explanation:
// nums       index     target
// 0            0        [0]
// 1            1        [0,1]
// 2            2        [0,1,2]
// 3            2        [0,1,3,2]
// 4            1        [0,4,1,3,2]

// Example 2:
// Input: nums = [1,2,3,4,0], index = [0,1,2,3,0]
// Output: [0,1,2,3,4]
// Explanation:
// nums       index     target
// 1            0        [1]
// 2            1        [1,2]
// 3            2        [1,2,3]
// 4            3        [1,2,3,4]
// 0            0        [0,1,2,3,4]

// Example 3:
// Input: nums = [1], index = [0]
// Output: [1]

const createTargetArray = (nums, index) => {
  let target = [];
  for (let i = 0; i < index.length; i++) {
    const indexValue = index[i];
    target.splice(indexValue, 0, nums[i]);
  }
  return target;
};

console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]));
console.log(createTargetArray([1, 2, 3, 4, 0], [0, 1, 2, 3, 0]));
console.log(createTargetArray([1], [0]));

// second approach using reduce
const createTarget = (nums, index) => {
  const targetArray = index.reduce(
    (acc, cur, index) => (acc.splice(cur, 0, nums[index]), acc),
    []
  );
  return targetArray;
};

console.log(createTarget([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]));
console.log(createTarget([1, 2, 3, 4, 0], [0, 1, 2, 3, 0]));
console.log(createTarget([1], [0]));

// third approach
const target = (nums, index) => {
  let target = [];
  for (const i in nums) {
    target.splice(index[i], 0, nums[i]);
  }
  return target;
};

console.log(target([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]));
console.log(target([1, 2, 3, 4, 0], [0, 1, 2, 3, 0]));
console.log(target([1], [0]));
