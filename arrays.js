// Find the maximum element in an array.
function findMaxElement(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Example usage:
const nums = [4, 7, 2, 9, 1];
const maxElement = findMaxElement(nums);
console.log(maxElement); // Output: 9

// Reverse an array in-place (without using any extra space).
function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}

// Example usage:
const nums2 = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(nums);
console.log(reversedArray); // Output: [5, 4, 3, 2, 1]

// Find the sum of all elements in an array.
function findArraySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Example usage:
const nums3 = [2, 4, 6, 8, 10];
const arraySum = findArraySum(nums);
console.log(arraySum); // Output: 30

// Remove duplicates from an array.
function removeDuplicates(arr) {
  const uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
}

// Example usage:
const nums4 = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(nums);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

//  Find the average (mean) of all elements in an array.
function findArrayAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  const average = sum / arr.length;
  return average;
}

// Example usage:
const nums5 = [2, 4, 6, 8, 10];
const arrayAverage = findArrayAverage(nums);
console.log(arrayAverage); // Output: 6

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Example:
// Input: x = 123
// Output: 321

function reverse(x) {
  const isNegative = x < 0;
  let reversed = 0;

  x = Math.abs(x);

  while (x > 0) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  if (reversed > Math.pow(2, 31) - 1) {
    return 0;
  }

  return isNegative ? -reversed : reversed;
}

console.log(reverse(123));

// Determine whether an integer x is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// Example:
// Input: x = 121
// Output: true

function isPalindrome(x) {
  if (x < 0) {
    return false;
  }

  let reversed = 0;
  let original = x;

  while (x > 0) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return reversed === original;
}

console.log(isPalindrome(121));

// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

// Example:
// Input: nums = [1, 1, 2]
// Output: 2
// Explanation: After removing the duplicates, the array is [1, 2] and the length is 2.

function removeDuplicates(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let uniqueCount = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[uniqueCount] = nums[i];
      uniqueCount++;
    }
  }

  return uniqueCount;
}

const num = [1, 1, 2];
console.log(removeDuplicates(num));
console.log(num);

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:
// Input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6
// Explanation: The contiguous subarray [4, -1, 2, 1] has the largest sum = 6.

function maxSubArray(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Test case
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6

// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Example:
// Input: nums1 = [1, 2, 2, 1], nums2 = [2, 2]
// Output: [2, 2]

function intersect(nums1, nums2) {
  const map = {};
  const intersection = [];

  for (const num of nums1) {
    map[num] = (map[num] || 0) + 1;
  }

  for (const num of nums2) {
    if (map[num] && map[num] > 0) {
      intersection.push(num);
      map[num]--;
    }
  }

  return intersection;
}

// Test case
console.log(intersect([1, 2, 2, 1], [2, 2])); // Output: [2, 2]
