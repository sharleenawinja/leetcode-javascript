// There is a programming language with only four operations and one variable X:
// ++X and X++ increments the value of the variable X by 1.
// --X and X-- decrements the value of the variable X by 1.
// Initially, the value of X is 0.

// Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

// Example 1:
// Input: operations = ["--X","X++","X++"]
// Output: 1
// Explanation: The operations are performed as follows:
// Initially, X = 0.
// --X: X is decremented by 1, X =  0 - 1 = -1.
// X++: X is incremented by 1, X = -1 + 1 =  0.
// X++: X is incremented by 1, X =  0 + 1 =  1.

// Example 2:
// Input: operations = ["++X","++X","X++"]
// Output: 3
// Explanation: The operations are performed as follows:
// Initially, X = 0.
// ++X: X is incremented by 1, X = 0 + 1 = 1.
// ++X: X is incremented by 1, X = 1 + 1 = 2.
// X++: X is incremented by 1, X = 2 + 1 = 3.

// Example 3:
// Input: operations = ["X++","++X","--X","X--"]
// Output: 0
// Explanation: The operations are performed as follows:
// Initially, X = 0.
// X++: X is incremented by 1, X = 0 + 1 = 1.
// ++X: X is incremented by 1, X = 1 + 1 = 2.
// --X: X is decremented by 1, X = 2 - 1 = 1.
// X--: X is decremented by 1, X = 1 - 1 = 0.

// first approach using for looop
const finalValue = (operations) => {
  let value = 0;
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "++X" || operations[i] === "X++") {
      value++;
    } else {
      value--;
    }
  }
  return value;
};

console.log(finalValue(["--X", "X++", "X++"]));
console.log(finalValue(["++X", "++X", "X++"]));
console.log(finalValue(["X++", "++X", "--X", "X--"]));

// second approach using reduce
const valueAfterOperations = (operations) => {
  let x = 0;
  x = operations.reduce((acc, operation) => {
    if (operation === "++X" || operation === "X++") {
      return ++acc; //use prefix instead of postfix
    } else if (operation === "--X" || operation === "X--") {
      return --acc; //use prefix instead of postfix
    }
    return acc; //return the accumulator unchanged if the value is inavalid
  }, x);
  return x;
};

console.log(valueAfterOperations(["--X", "X++", "X++"]));
console.log(valueAfterOperations(["++X", "++X", "X++"]));
console.log(valueAfterOperations(["X++", "++X", "--X", "X--"]));

// third approach using for each
function getValueAfterOperations(operations) {
  let returnValue = 0;
  operations.forEach((operation) => {
    if (operation === "++X" || operation === "X++") {
      returnValue++;
    } else if (operation === "--X" || operation === "X--") {
      returnValue--;
    }
  });
  return returnValue;
}

console.log(getValueAfterOperations(["--X", "X++", "X++"]));
console.log(getValueAfterOperations(["++X", "++X", "X++"]));
console.log(getValueAfterOperations(["X++", "++X", "--X", "X--"]));
