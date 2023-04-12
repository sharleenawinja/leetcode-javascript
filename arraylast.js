// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

class OptimizeArray {
  constructor(array) {
    this.array = array;
  }

  lastElement() {
    const [lastElement] = this.array.slice(-1);
    if (lastElement) {
      return lastElement;
    } else {
      return -1;
    }
  }
}

const optimized = new OptimizeArray([1, 2, 3, 4]);
const emptyArr = new OptimizeArray([]);
console.log(optimized.lastElement());
console.log(emptyArr.lastElement());

// second method
Array.prototype.last = function () {
  if (this.length === 0) {
    return -1;
  } else {
    return this[this.length - 1];
  }
};

const testArray = [67, 6678, 5678];
console.log(testArray.last());

const testEmpty = [];
console.log(testEmpty.last());
