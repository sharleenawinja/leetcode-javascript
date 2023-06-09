// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// method one using a hashmap
function majorityElement(nums) {
  const map = new Map();
  const majorityCount = Math.floor(nums.length / 2);

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
    if (map.get(num) > majorityCount) {
      return num;
    }
  }
}

// method two
// sorting the array
function majorityElement(nums) {
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
}
