// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.
function threeSumClosest(nums, target) {
  let result = Infinity;
  let minDiff = Infinity;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        const diff = Math.abs(sum - target);
        if (diff < minDiff) {
          minDiff = diff;
          result = sum;
        }
      }
    }
  }
  return result;
}
