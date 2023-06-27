// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

// Example 1:
// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7]
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

// Example 2:
// Input: nums = [1,2,3,4,4,3,2,1], n = 4
// Output: [1,4,2,3,3,2,4,1]

// Example 3:
// Input: nums = [1,1,2,2], n = 2
// Output: [1,2,1,2]

// first approach
const shuffleArray = (nums, n) => {
  let arr1 = nums.slice(0, n);
  let arr2 = nums.slice(n);
  let ans = [];
  for (let i = 0; i < nums.length / 2; i++) {
    ans.push(arr1[i]);
    ans.push(arr2[i]);
  }
  return ans;
};

console.log(shuffleArray([2, 5, 1, 3, 4, 7], 3));
console.log(shuffleArray([1, 2, 3, 4, 4, 3, 2, 1], 4));
console.log(shuffleArray([1, 1, 2, 2], 2));

// second approach
const rearrangeArray = (nums) => {
  const n = nums.length / 2;
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push(nums[i]);
    result.push(nums[i + n]);
  }

  return result;
};

console.log(rearrangeArray([2, 5, 1, 3, 4, 7], 3));
console.log(rearrangeArray([1, 2, 3, 4, 4, 3, 2, 1], 4));
console.log(([1, 1, 2, 2], 2));

// third approach using flatmap
const shuffle = (nums, n) => {
  let arr1 = nums.slice(0, n);
  let arr2 = nums.slice(n);
  return arr1.flatMap((num, index) => [num, arr2[index]]);
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4));
console.log(shuffle([1, 1, 2, 2], 2));
