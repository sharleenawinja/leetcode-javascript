// Given a positive integer n, find the sum of all integers in the range [1, n] inclusive that are divisible by 3, 5, or 7.
// Return an integer denoting the sum of all numbers in the given range satisfying the constraint.

// Example 1:
// Input: n = 7
// Output: 21
// Explanation: Numbers in the range [1, 7] that are divisible by 3, 5, or 7 are 3, 5, 6, 7. The sum of these numbers is 21.

// Example 2:
// Input: n = 10
// Output: 40
// Explanation: Numbers in the range [1, 10] that are divisible by 3, 5, or 7 are 3, 5, 6, 7, 9, 10. The sum of these numbers is 40.

// Example 3:
// Input: n = 9
// Output: 30
// Explanation: Numbers in the range [1, 9] that are divisible by 3, 5, or 7 are 3, 5, 6, 7, 9. The sum of these numbers is 30.

const sumMultiples = (n) => {
  let multiples = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      multiples.push(i);
    }
  }
  const total = multiples.reduce((a, b) => {
    return a + b;
  }, 0);
  return total;
};

console.log(sumMultiples(7));
console.log(sumMultiples(10));
console.log(sumMultiples(9));

const sumOfMultiples = (n) => {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      count = count + i;
    }
  }

  return count;
};

console.log(sumOfMultiples(7));
console.log(sumOfMultiples(10));
console.log(sumOfMultiples(9));
