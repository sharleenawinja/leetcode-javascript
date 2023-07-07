// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.
// You are given an array of strings sentences, where each sentences[i] represents a single sentence.
// Return the maximum number of words that appear in a single sentence.

// Example 1:
// Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
// Output: 6
// Explanation:
// - The first sentence, "alice and bob love leetcode", has 5 words in total.
// - The second sentence, "i think so too", has 4 words in total.
// - The third sentence, "this is great thanks very much", has 6 words in total.
// Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words.

// Example 2:
// Input: sentences = ["please wait", "continue to fight", "continue to win"]
// Output: 3
// Explanation: It is possible that multiple sentences contain the same number of words.
// In this example, the second and third sentences (underlined) have the same number of words.

const maxNumberOfWords = (sentences) => {
  let values = [];
  for (const sentence of sentences) {
    const trimmedSentence = sentence.trim();
    const wordsInSentence = trimmedSentence.split(" ").length;
    values.push(wordsInSentence);
  }
  return Math.max(...values);
};

console.log(
  maxNumberOfWords([
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much",
  ])
);
console.log(
  maxNumberOfWords(["please wait", "continue to fight", "continue to win"])
);

// second approach
const maxWords = (sentences) => {
  let max = 0;
  for (let i = 0; i < sentences.length; i++) {
    const words = sentences[i].split(" ");
    max = words.length > max ? words.length : max;
  }
  return max;
};

console.log(
  maxWords([
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much",
  ])
);
console.log(maxWords(["please wait", "continue to fight", "continue to win"]));

// third approach using map
const mostWords = (sentences) => {
  return Math.max(...sentences.map((sentence) => sentence.split(" ").length));
};

console.log(
  mostWords([
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much",
  ])
);
console.log(mostWords(["please wait", "continue to fight", "continue to win"]));
