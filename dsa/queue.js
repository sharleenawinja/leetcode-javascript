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

//creating a priority queue
// not only do you pass the ellement into the queue, you also pass the priority of the element
//if all the priorities are the same number, its going to behave just like a normal queue
// however when you pass in elements at different priorities then the elements that are passed in with a higher priority are sent to the beginning of the queue
// eg elements with priority 5 are ahead of elements with priority 4; but if elements have the same priority it behaves like a normal queue
class PriorityQueue {
  constructor() {
    this.collection = [];
  }

  print = () => {
    console.log(this.collection);
  };

  isEmpty = () => {
    return this.collection.length === 0;
  };

  enqueue = (element) => {
    if (this.isEmpty()) {
      this.collection.push(element);
    } else {
      let added = false;
      for (let i = 0; i < this.collection.length; i++) {
        if (element[1] < this.collection[i][1]) {
          //checking priorities
          this.collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        this.collection.push(element);
      }
    }
  };

  dequeue = () => {
    let value = this.collection.shift();
    return value[0];
  };

  front = () => {
    return this.collection[0];
  };

  size = () => {
    return this.collection.length;
  };
}

const testPriority = new PriorityQueue();
testPriority.enqueue(["queues", 2]); //first item in array is the element to be added to the queue and the second element is the priority
testPriority.enqueue(["data structures", 3]);
testPriority.enqueue(["algorithms", 1]);
testPriority.enqueue(["same prioritty", 1]);
testPriority.print();
console.log("dequeue", testPriority.dequeue());
console.log("front", testPriority.front());
testPriority.print();
console.log("size", testPriority.size());
