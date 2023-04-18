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

// reverse a string with a decrementing for loop
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
