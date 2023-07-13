// You are given a string allowed consisting of distinct characters and an array of strings words.
// A string is consistent if all characters in the string appear in the string allowed.
// Return the number of consistent strings in the array words.

// Example 1:
// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.

// Example 2:
// Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
// Output: 7
// Explanation: All strings are consistent.

// Example 3:
// Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
// Output: 4
// Explanation: Strings "cc", "acd", "ac", and "d" are consistent.

const countConsistentStrings = (allowed, words) => {
  const pattern = new RegExp(`^[${allowed}]+$`);
  //   const pattern = new RegExp(`^(?=[${allowed}]+$)`);
  let count = 0;

  for (const word of words) {
    if (pattern.test(word)) {
      count++;
    }
  }

  return count;
};

console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]));
console.log(
  countConsistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"])
);
console.log(
  countConsistentStrings("cad", [
    "cc",
    "acd",
    "b",
    "ba",
    "bac",
    "bad",
    "ac",
    "d",
  ])
);

// second approach
const wordIncludesOtherCharacters = (allowed, words) => {
  let count = 0;

  for (const word of words) {
    let consistent = true;
    for (const char of word) {
      if (!allowed.includes(char)) {
        consistent = false;
        break;
      }
    }
    if (consistent) {
      count++;
    }
  }

  return count;
};

console.log(
  wordIncludesOtherCharacters("ab", ["ad", "bd", "aaab", "baa", "badab"])
);
console.log(
  wordIncludesOtherCharacters("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"])
);
console.log(
  wordIncludesOtherCharacters("cad", [
    "cc",
    "acd",
    "b",
    "ba",
    "bac",
    "bad",
    "ac",
    "d",
  ])
);

// third approach using hash map
const countConsistent = function (allowed, words) {
  const hashmap = new Map();
  let output = 0;

  for (let i = 0; i < allowed.length; i++) {
    hashmap.set(allowed[i], 1);
  }

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    output++;
    for (let j = 0; j < word.length; j++) {
      if (!hashmap.has(word[j])) {
        output--;
        break;
      }
    }
  }

  return output;
};

console.log(countConsistent("ab", ["ad", "bd", "aaab", "baa", "badab"]));
console.log(countConsistent("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"]));
console.log(
  countConsistentStrings("cad", [
    "cc",
    "acd",
    "b",
    "ba",
    "bac",
    "bad",
    "ac",
    "d",
  ])
);
