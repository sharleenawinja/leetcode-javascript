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

// Unique Paths
function uniquePaths(m, n) {
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }

  for (let j = 0; j < n; j++) {
    dp[0][j] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
}

// Decode Ways
function numDecodings(s) {
  const n = s.length;
  const dp = new Array(n + 1).fill(0);

  dp[0] = 1;
  dp[1] = s[0] === "0" ? 0 : 1;

  for (let i = 2; i <= n; i++) {
    const oneDigit = Number(s.slice(i - 1, i));
    const twoDigits = Number(s.slice(i - 2, i));

    if (oneDigit >= 1 && oneDigit <= 9) {
      dp[i] += dp[i - 1];
    }

    if (twoDigits >= 10 && twoDigits <= 26) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[n];
}

//  Rotate Image
function rotate(matrix) {
  const n = matrix.length;

  // Transpose the matrix
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // Reverse each row
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
}

// Given a string s, find the length of the longest substring without repeating characters.

// Example:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The longest substring without repeating characters is "abc", which has a length of 3.
function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let start = 0;
  const map = new Map();

  for (let end = 0; end < s.length; end++) {
    const char = s[end];

    if (map.has(char)) {
      start = Math.max(start, map.get(char) + 1);
    }

    map.set(char, end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

// Test case
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
