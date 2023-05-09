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
