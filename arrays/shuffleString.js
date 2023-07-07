// You are given a string s and an integer array indices of the same length.
// The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
// Return the shuffled string.

// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"

// Input: s = "abc", indices = [0,1,2]
// Output: "abc"
// Explanation: After shuffling, each character remains in its position.

const shuffleString = (s, indices) => {
  const finalString = [];
  for (let i = 0; i < indices.length; i++) {
    let index = indices[i];
    finalString[index] = s.charAt(i);
  }
  return finalString.join("");
};

console.log(shuffleString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
console.log(shuffleString("abc", [0, 1, 2]));

// second approach using for each
const createString = (s, indices) => {
  let finalString = [];
  indices.forEach((value, index) => {
    finalString[value] = s.charAt(index); //using splice results in other items being shifted to the right hence affecting the order
  });
  return finalString.join("");
};

console.log(createString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
console.log(createString("abc", [0, 1, 2]));
