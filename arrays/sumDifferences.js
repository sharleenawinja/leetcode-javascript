// Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:
// answer.length == nums.length.
// answer[i] = |leftSum[i] - rightSum[i]|.

// Where:
// leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
// rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
// Return the array answer.

// Example 1:
// Input: nums = [10,4,8,3]
// Output: [15,1,11,22]
// Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
// The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].

// Example 2:
// Input: nums = [1]
// Output: [0]
// Explanation: The array leftSum is [0] and the array rightSum is [0].
// The array answer is [|0 - 0|] = [0].

const leftRightDifference = (nums) => {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      const leftSum = 0;
    }
    if (i === nums.length - 1) {
      const rightSum = 0;
    }
    const rightSum = nums.slice(i + 1).reduce((a, b) => a + b, 0);
    const leftSum = nums.slice(0, i).reduce((a, b) => a + b, 0);
    const difference = leftSum - rightSum;
    if (difference < 0) {
      ans.push(-difference);
    } else {
      ans.push(difference);
    }
  }
  return ans;
};

console.log(leftRightDifference([10, 4, 8, 3]));
console.log(leftRightDifference([1]));

// second method using math.abs to find the absolute value
const sumDifference = (nums) => {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    const rightSum = nums.slice(i + 1).reduce((a, b) => a + b, 0);
    const leftSum = nums.slice(0, i).reduce((a, b) => a + b, 0);
    const difference = leftSum - rightSum;
    ans.push(Math.abs(difference));
  }
  return ans;
};

console.log(sumDifference([10, 4, 8, 3]));
console.log(sumDifference([1]));

// third method using map
const totalOfLeftAndRightSum = (nums) => {
  return nums.map((num, index) => {
    return Math.abs(
      nums.slice(0, index).reduce((a, b) => a + b, 0) -
        nums.slice(index + 1).reduce((a, b) => a + b, 0)
    );
  });
};
console.log(totalOfLeftAndRightSum([10, 4, 8, 3]));
console.log(totalOfLeftAndRightSum([0]));
