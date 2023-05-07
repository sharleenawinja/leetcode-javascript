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
