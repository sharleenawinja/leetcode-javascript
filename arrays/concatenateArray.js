function concatenateArray(nums) {
  return [...nums, ...nums];
}

console.log(concatenateArray([1, 2, 1]));
console.log(concatenateArray([1, 3, 2, 1]));

const concatenate = (nums) => {
  return nums.concat(nums);
};

console.log(concatenate([1, 2, 1]));
console.log(concatenate([1, 3, 2, 1]));
