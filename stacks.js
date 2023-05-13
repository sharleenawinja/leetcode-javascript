// reverse a string using a stack

function reverseString(str) {
  var stack = [];
  for (var i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  var reversedStr = "";
  while (stack.length > 0) {
    reversedStr += stack.pop();
  }
  return reversedStr;
}

var input = "Hello, World!";
console.log(reverseString(input)); // Output: "!dlroW ,olleH"

//second solution
class Stack {
  constructor() {
    this.data = [];
  }

  push(item) {
    this.data.push(item);
  }

  pop() {
    return this.data.pop();
  }

  isEmpty() {
    return this.data.length === 0;
  }
}

function reverseString(str) {
  var stack = new Stack();
  for (var i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  var reversedStr = "";
  while (!stack.isEmpty()) {
    reversedStr += stack.pop();
  }
  return reversedStr;
}

var input = "Hello, World!";
console.log(reverseString(input)); // Output: "!dlroW ,olleH"

//solution 3
function reverseString(str) {
  var stack = Array.from(str);
  var reversedStr = "";
  while (stack.length > 0) {
    reversedStr += stack.pop();
  }
  return reversedStr;
}

var input = "Hello, World!";
console.log(reverseString(input)); // Output: "!dlroW ,olleH"

//solution 4
function reverseString(str) {
  var stack = [...str];
  var reversedStr = "";
  while (stack.length > 0) {
    reversedStr += stack.pop();
  }
  return reversedStr;
}

var input = "Hello, World!";
console.log(reverseString(input)); // Output: "!dlroW ,olleH"

//solution 5
function reverseString(str) {
  if (str === "") {
    return "";
  }
  return reverseString(str.substr(1)) + str.charAt(0);
}

var input = "Hello, World!";
console.log(reverseString(input)); // Output: "!dlroW ,olleH"

// Given a string, check if it is a palindrome.

function isPalindrome(str) {
  const stack = [];
  for (const char of str) {
    stack.push(char);
  }
  const reversedString = "";
  while (!stack.isEmpty()) {
    reversedString += stack.pop();
  }
  return str === reversedString;
}

// Given a list of numbers, find the maximum value.
function findMax(numbers) {
  const stack = [];
  for (const number of numbers) {
    stack.push(number);
  }
  let max = stack[0];
  while (!stack.isEmpty()) {
    if (stack.peek() > max) {
      max = stack.pop();
    } else {
      stack.pop();
    }
  }
  return max;
}

// Given a list of numbers, find the minimum value.
function findMin(numbers) {
  const stack = [];
  for (const number of numbers) {
    stack.push(number);
  }
  let min = stack[0];
  while (!stack.isEmpty()) {
    if (stack.peek() < min) {
      min = stack.pop();
    } else {
      stack.pop();
    }
  }
  return min;
}

// Given a list of numbers, find the sum of all the numbers.
function sumNumbers(numbers) {
  const stack = [];
  for (const number of numbers) {
    stack.push(number);
  }
  let sum = 0;
  while (!stack.isEmpty()) {
    sum += stack.pop();
  }
  return sum;
}

// Given a string of parentheses, check if it is balanced.
function isBalanced(str) {
  const stack = [];
  for (const char of str) {
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.isEmpty() || stack.pop() !== "(") {
        return false;
      }
    }
  }
  return stack.isEmpty();
}
