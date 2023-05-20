// three ways to reverse a string in javascript

// 1. reverse a string with built in methods
// the split method splits a string object into an array of string by separating the string into substrings
// the reverse method reverses an array in place. the first array element becomed the last and the last becomes the first
// the join method joins all elements of an array into a string

function reverseString(str) {
  // step 1 use the split method to return an array
  const splitString = str.split(""); //hello.split("") => ["h", "e", "l", "l", "o"]

  // use the reverse method to reverse the new created array
  const reverseArray = splitString.reverse(); //reverseArray = ["h", "e", "l", "l", "o"].reverse() => ["o", "l", "l", "e", "h"]

  // use the join method to join  all the elements of the array into a string
  const joinArray = reverseArray.join(""); //joinArray = ["o", "l", "l", "e", "h"].join("") => "olleh"

  // return the reversed string
  return joinArray; //"olleh"
}

console.log(reverseString("hello"));

//chaining the three methods together
function stringReversal(str) {
  return str.split("").reverse().join("");
}

console.log(stringReversal("hello"));

//2.  reverse a string with a decrementing for loop
function reversingAString(str) {
  // create an empty string that will store the new string
  let newString = "";

  // create the for loop
  /*
    the starting point of the loop will be (str.length -1 ) which corresponds to the 
    last character of the string "o"
    As long as i is greater than or equal to 0 the loop will go on
    we decrement i after each iteration
    */
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }

  return newString;
}

console.log(reversingAString("hello"));

//3. reverse a string with recursion

// this method will use String.prototype.substr() method and the String.prototype.charAt() method
// the substr() method returns the characters in a str beginning at the specified location through the specified number of characters
"hello".substr(1); //ello
"hello".substr(1, 3); //ell
//the substr() method is deprecated and thus is no longer recommended
/*though some browsers may still support it, it may have already been removed in the relevant wen standards,
may be in the process of being dropped, or may be kept for compatibility purposes
this feature may cease to work at any moment
*/

// the charAt() method returns the specified character from a string
"hello".charAt(0); //h
"hello".charAt(4); //0

// the depth of the recursion is equal to the length of the string
// this solution is not the best one and will be really slow if the string is very long and the stack size is of a major concern

function reverseStringUsingRecursion(str) {
  //BASE CASE
  if (str === "")
    //this is the terminal case that will end the recursion (base case or termnal case in a recursion)
    return "";
  //RECURSIVE CALL
  else return reverseStringUsingRecursion(str.substr(1)) + str.charAt(0);

  /*
        first part of the recursion method 
        you need to remember that you won't have just one call, you'll have several nested calls

        Each call: str === "?"        	                  reverseString(str.subst(1))     + str.charAt(0)
1st call – reverseString("Hello")   will return   reverseString("ello")           + "h"
2nd call – reverseString("ello")    will return   reverseString("llo")            + "e"
3rd call – reverseString("llo")     will return   reverseString("lo")             + "l"
4th call – reverseString("lo")      will return   reverseString("o")              + "l"
5th call – reverseString("o")       will return   reverseString("")               + "o"

Second part of the recursion method
The method hits the if condition and the most highly nested call returns immediately

5th call will return reverseString("") + "o" = "o"
4th call will return reverseString("o") + "l" = "o" + "l"
3rd call will return reverseString("lo") + "l" = "o" + "l" + "l"
2nd call will return reverserString("llo") + "e" = "o" + "l" + "l" + "e"
1st call will return reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h" 
         */
}

console.log(reverseStringUsingRecursion("hello"));

// using conditional operator
function reversingString(str) {
  return str === "" ? "" : reverseString(str.substr(1)) + str.charAt(0);
}
console.log(reversingString("hello"));

// Maximum Depth of Binary Tree
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function maxDepth(root) {
  if (root === null) {
    return 0;
  }

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
}

// Validate Binary Search Tree
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function isValidBST(root) {
  return isValidBSTHelper(root, null, null);
}

function isValidBSTHelper(node, min, max) {
  if (node === null) {
    return true;
  }

  if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) {
    return false;
  }

  return (
    isValidBSTHelper(node.left, min, node.val) &&
    isValidBSTHelper(node.right, node.val, max)
  );
}

//  Binary Tree Level Order Traversal
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function levelOrder(root) {
  if (root === null) {
    return [];
  }

  const queue = [root];
  const result = [];

  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel = [];

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();
      currentLevel.push(currentNode.val);

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }

      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }

    result.push(currentLevel);
  }

  return result;
}
