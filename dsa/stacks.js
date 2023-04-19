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

// another implementation of stacks in javascript
class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  push = (value) => {
    // adding an element to the end of the stack
    this.storage[this.count] = value;
    this.count++;
  };

  pop = () => {
    if (this.count === 0) {
      return undefined; //returning undefined because a count of zero means there is nothing in the stack
    }

    // removes an element from the end of the stack
    this.count--;
    const result = this.storage[this.count];
    // delete operator removes a property from an object
    // if the property's value is an object and there are no more referenced to the object, the
    // object held by that property is eventually released automatically
    // parameters => object - name of the object or an expression that evaluates to an object; property - property to delete
    // returns true or false
    const deletion = delete this.storage[this.count];
    console.log("deletion", deletion);
    return result;
  };

  size = () => {
    // return size of the stack
    return this.count;
  };

  peek = () => {
    // returns value at the end of the stack but will not remove the value from the stack, unlike the pop method
    return this.storage[this.count - 1];
  };
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
console.log("peek", myStack.peek());
console.log("size", myStack.size());
console.log("pop", myStack.pop());
console.log("size", myStack.size());
console.log("peek", myStack.peek());
myStack.push("stacks");
console.log("peek", myStack.peek());
console.log("size", myStack.size());
