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
