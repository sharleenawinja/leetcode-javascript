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

function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b);
  let result = Infinity;
  let minDiff = Infinity;
  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      const diff = Math.abs(sum - target);
      if (diff < minDiff) {
        minDiff = diff;
        result = sum;
      }
      if (sum < target) {
        j++;
      } else {
        k--;
      }
    }
  }
  return result;
}

function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b);
  let result = Infinity;
  let minDiff = Infinity;
  const diffMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const diff = target - nums[i] - nums[j];
      if (diffMap.has(diff)) {
        const k = diffMap.get(diff);
        const sum = nums[i] + nums[j] + nums[k];
        const diff = Math.abs(sum - target);
        if (diff < minDiff) {
          minDiff = diff;
          result = sum;
        }
      }
    }
    for (let k = i + 1; k < nums.length; k++) {
      const diff = target - nums[i] - nums[k];
      if (!diffMap.has(diff)) {
        diffMap.set(diff, k);
      }
    }
  }
  return result;
}
