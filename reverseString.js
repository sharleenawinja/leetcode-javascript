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
