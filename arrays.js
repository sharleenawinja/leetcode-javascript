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
