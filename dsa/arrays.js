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

// You are climbing a staircase that has n steps. You can take either one or two steps at a time. Return the number of distinct ways to climb to the top.

// Example:
// Input: n = 4
// Output: 5
// Explanation: There are five distinct ways to climb to the top.
// 1. 1 step + 1 step + 1 step + 1 step
// 2. 1 step + 2 steps + 1 step
// 3. 2 steps + 1 step + 1 step
// 4. 1 step + 1 step + 2 steps
// 5. 2 steps + 2 steps

function climbStairs(n) {
  if (n === 1) {
    return 1;
  }

  const dp = new Array(n + 1);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

// Test case
console.log(climbStairs(4)); // Output: 5

// Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example:
// Input: nums = [2, 2, 1, 1, 1, 2, 2]
// Output: 2

function majorityElement(nums) {
  let majority = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === majority) {
      count++;
    } else {
      count--;
      if (count === 0) {
        majority = nums[i];
        count = 1;
      }
    }
  }

  return majority;
}

// Test case
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2

// You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example:
// Input: prices = [7, 1, 5, 3, 6, 4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5. Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }

  return maxProfit;
}

// Test case
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5

// Given an array nums of n integers, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:
// Input: nums = [1, 2, 3, 4]
// Output: [24, 12, 8, 6]

// Solution
function productExceptSelf(nums) {
  const n = nums.length;
  const output = new Array(n).fill(1);

  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    output[i] *= leftProduct;
    leftProduct *= nums[i];
  }

  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    output[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return output;
}

// Test case
console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]

// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value. If the target is not found in the array, return [-1, -1].

// Example:
// Input: nums = [5, 7, 7, 8, 8, 10], target = 8
// Output: [3, 4]

// Solution:
function searchRange(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let start = -1;
  let end = -1;

  // Find the starting position
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      start = mid;
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // Find the ending position
  left = 0;
  right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      end = mid;
      left = mid + 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return [start, end];
}

// Test case
console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // Output: [3, 4]

// Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.

// Example:
// Input: nums = [1, 1, 1], k = 2
// Output: 2

// Solution:
function subarraySum(nums, k) {
  let count = 0;
  let sum = 0;
  const map = new Map();
  map.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return count;
}

// Test case
console.log(subarraySum([1, 1, 1], 2)); // Output: 2

// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// Example:
// Input: nums = [100, 4, 200, 1, 3, 2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4].

// Solution:

function longestConsecutive(nums) {
  const set = new Set(nums);
  let longestStreak = 0;

  for (let num of set) {
    if (!set.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      while (set.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
}

// Test case
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // Output: 4
