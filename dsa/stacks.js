// stack of books => stack data structure
/*
when making a stack of books the top most book is added last and removed first
stacks are a last in first out type of service
another example of a stack is the browser historyt
the most recent page to be visited is added to the top of the browser history page (stack.push) - this is 
the last page to be added to the browdser history yet it is accessed first with the back button(stack.pop)
 */

// functions => push - placing data onto a stack; pop - removing the top element of the stack
// peek - displayig the top element of the stack; length - determining how many elements are on the stack ie size of the stack
// an array object already has this functions hence it can be used as a stack

const checkPalindrome = () => {
  let letters = []; //this is our stack
  let word = "racecar";
  let reverseWord = "";
  // put letters of the word into the letters array
  for (let i = 0; i < word.length; i++) {
    letters.push(word[i]);
  }
  // pop letters and add to reverseWord => last in first out
  for (let i = 0; i < word.length; i++) {
    reverseWord += letters.pop();
  }
  if (reverseWord === word) {
    console.log(`${word} is a palindrome`);
  } else {
    console.log(`${word} is not a palindrome`);
  }

  //OTHER METHOD TO CHECK PALINDROME WITHOUT PUSH AND POP => THIS IS NOT MEANT TO IMPLEMENT STACK
  //   let text = "racecar";
  //   let reverse = "";
  //   for (let i = text.length - 1; i >= 0; i--) {
  //     reverse += text[i];
  //   }
  //   if (reverse === text) {
  //     console.log("palindrome");
  //   } else {
  //     console.log("not palindrome");
  //   }
};

checkPalindrome();
