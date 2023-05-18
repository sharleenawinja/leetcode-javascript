/*
write a function that takes two numbers and returns the sum of those two numbers
 */

function add(a, b) {
  return a + b;
}

console.log(add(6, 7));
console.log(add(10, 20));
console.log(add(3, 9));

/**
 * write a function that takes any number of arguments
 * of type number and returns the sum of all the arguments
 */

const sum = (...args) => {
  const result = args.reduce((sum, element) => sum + element, 0);
  return result;
};
console.log(sum(1, 2, 3, 4, 5));

/**
 * write a function that takes two strings A and B
 * and returns whether B is in A in a case insensitive way
 */

const stringIncludes = (stringA, stringB) => {
  stringLower = stringB.toLowerCase();
  return stringA.includes(stringLower);
};
console.log(stringIncludes("Hello world, welcome to the universe.", "world"));

/**
 * write a function that takes an array of objects
 *and returns an array of the objects' "name" only if the property exists
 *
 */

function getName(objectArray) {
  const newArray = objectArray.filter((obj) => obj.hasOwnProperty("name"));
  return newArray;
}
console.log(
  getName([
    { a: 1 },
    { name: "Jane" },
    {},
    { name: "Mark" },
    { name: "Sophia" },
    { b: 2 },
  ])
);

/**
 * write a function that takes an array of numbers
 * and returns the index of the largest number
 */
const getLargestNumber = (numArray) => {
  let largestIndex = 0;
  for (let i = 1; i < numArray.length; i++) {
    if (numArray[i] > numArray[largestIndex]) {
      largestIndex = i;
    }
  }
  return largestIndex;
};
console.log(getLargestNumber([4, 5, 1, 3]));

const secondGetLargestNumber = (numArray) => {
  const largestNum = Math.max(...numArray); // get the largest number in the array
  return numArray.indexOf(largestNum); // return the index of the largest number
};

console.log(secondGetLargestNumber([4, 5, 1, 3])); // Output: 1

const thirdGetLargestNumber = (numArray) => {
  const largestIndex = numArray.reduce(
    (maxIndex, currentNum, currentIndex, array) => {
      return currentNum > array[maxIndex] ? currentIndex : maxIndex;
    },
    0
  );
  return largestIndex;
};

console.log(thirdGetLargestNumber([4, 5, 1, 3])); // Output: 1

/**
 * write a function that returns a promise that resolves
 * after a number of milliseconds
 */
const wait = (milliseconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
};
wait(1000).then(() => {
  console.log("One second has elapsed.");
});

// Find Longest Substring Without Repeating Characters
function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let start = 0;
  const charMap = new Map();

  for (let end = 0; end < s.length; end++) {
    const currentChar = s[end];
    if (charMap.has(currentChar) && charMap.get(currentChar) >= start) {
      start = charMap.get(currentChar) + 1;
    }
    charMap.set(currentChar, end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

// Subsets
function subsets(nums) {
  const result = [];
  backtrack([], 0);
  return result;

  function backtrack(currSet, start) {
    result.push(currSet.slice());
    for (let i = start; i < nums.length; i++) {
      currSet.push(nums[i]);
      backtrack(currSet, i + 1);
      currSet.pop();
    }
  }
}
