// almost similar to a stack
// while a stack is last in first out, a queue is first in first out
// an example is when you are waiting in line to buy something at the store
// the first person to get in line will be the first person to get to the cash register and leave the store
// another example is a print queue; when a lot of people are printing documents on the same printer the first document to be sent to the printer will be the first to be printed
// in javascript, just like a stack you can implement a queue with an array

class Queue {
  constructor() {
    this.collection = [];
  }

  print() {
    console.log(this.collection);
  }

  enqueue(element) {
    this.collection.push(element);
  }

  dequeue() {
    // shift removes an element from the beginning of an array and shifts the remaining elements up
    // unshift adds an elemnt at the beginning of an array and shifts the remaining elements down the list
    this.collection.shift();
  }

  front() {
    return this.collection[0];
  }

  size() {
    return this.collection.length;
  }

  isEmpty() {
    return this.collection.length === 0;
  }
}

const testQueue = new Queue();
testQueue.enqueue("a");
testQueue.enqueue("b");
testQueue.enqueue("c");
testQueue.print();
console.log(testQueue.size());
testQueue.dequeue();
console.log(testQueue.size());
console.log(testQueue.front());
console.log(testQueue.isEmpty());
