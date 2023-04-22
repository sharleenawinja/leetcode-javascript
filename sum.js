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
