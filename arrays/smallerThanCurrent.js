// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it.
// That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
// Return the answer in an array.

// Example 1:
// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
// Explanation:
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3).
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1).
// For nums[3]=2 there exist one smaller number than it (1).
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

// Example 2:
// Input: nums = [6,5,4,8]
// Output: [2,1,0,3]

// Example 3:
// Input: nums = [7,7,7,7]
// Output: [0,0,0,0]

// first approach using reduce
const smallerThanCurrent = (nums) => {
  let finalArray = [];
  for (let i = 0; i < nums.length; i++) {
    const sum = nums.reduce((total, a) => {
      if (a < nums[i]) {
        total += 1;
      }
      return total;
    }, 0);
    finalArray.push(sum);
  }
  return finalArray;
};

console.log(smallerThanCurrent([7, 7, 7, 7]));
console.log(smallerThanCurrent([8, 1, 2, 2, 3]));
console.log(smallerThanCurrent([6, 5, 4, 8]));

// second approach using forEach
const lessThanCurrent = (nums) => {
  let ansArray = [];
  for (let i = 0; i < nums.length; i++) {
    let total = 0;
    nums.forEach((num) => {
      if (num < nums[i]) {
        total += 1;
      }
      return total;
    });
    ansArray.push(total);
  }
  return ansArray;
};

console.log(lessThanCurrent([7, 7, 7, 7]));
console.log(lessThanCurrent([8, 1, 2, 2, 3]));
console.log(lessThanCurrent([6, 5, 4, 8]));

const smallThanCurrent = (nums) => {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        count++;
      }
    }
    result.push(count);
  }
  return result;
};

console.log(smallThanCurrent([7, 7, 7, 7]));
console.log(smallThanCurrent([8, 1, 2, 2, 3]));
console.log(smallThanCurrent([6, 5, 4, 8]));

// sorting approach
const lesserThanCurrent = (nums) => {
  const sortedNums = [...nums].sort((a, b) => a - b); //spread operator is used to create a copy of nums so as not to alter the original order of nums
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const index = sortedNums.indexOf(nums[i]);
    result.push(index);
  }
  return result;
};

console.log(lesserThanCurrent([7, 7, 7, 7]));
console.log(lesserThanCurrent([8, 1, 2, 2, 3]));
console.log(lesserThanCurrent([6, 5, 4, 8]));

const lessThan = (nums) => {
  const sorted = [...nums].sort((a, b) => a - b);
  return nums.map((num) => sorted.indexOf(num));
};

console.log(lessThan([7, 7, 7, 7]));
console.log(lessThan([8, 1, 2, 2, 3]));
console.log(lessThan([6, 5, 4, 8]));
