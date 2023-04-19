// the set data structure is kind of like an array; except there are no duplicate items
// values in a set are not in any particular order
// the typical use of a set is to check for the presence of a particular item

class MySet {
  // the variable collection wil hold a set
  constructor() {
    this.collection = [];
  }

  //this method will check for the presence of an element an and return true or false
  //this makes sure that there are no duplicates in the array
  has = (element) => {
    return this.collection.indexOf(element) !== -1;
  };

  //this method will return all the values in the set
  values = () => {
    return this.collection;
  };

  //this method will add an element to the set
  add = (element) => {
    if (!this.has(element)) {
      this.collection.push(element);
      return true;
    }
    return false;
  };

  //this method will remove an element from the set => es6 uses delete instead of remove
  remove = (element) => {
    if (this.has(element)) {
      index = collection.indexOf(element);
      this.collection.splice(index, 1);
      return true;
    }
    return false;
  };

  //this method will return the size of the collection => es6 size is a property not a method
  size = () => {
    return this.collection.length;
  };

  //next two methods make it possible to work with two different sets

  //this method will return the union of two sets
  // it will combine the sets but leave out any duplicates during the combination
  union = (anotherSet) => {
    let unionSet = new MySet();
    let firstSet = this.values();
    let secondSet = anotherSet.values();
    firstSet.forEach((element) => {
      unionSet.add(element);
    });
    secondSet.forEach((element) => {
      unionSet.add(element);
    });
    // for set data structure the values dont matter hence values can be returned in any order
    return unionSet;
  };

  //this method will return the intersection of two sets as a new set => all items that are in both sets
  intersection = (otherSet) => {
    let intersectionSet = new MySet();
    let firstSet = this.values();
    firstSet.forEach((element) => {
      if (otherSet.has(element)) {
        intersectionSet.add(element);
      }
    });

    return intersectionSet;
  };

  //this method will return the difference of two sets as a new set => all items that are in one set but not in the other set
  difference = (otherSet) => {
    let differenceSet = new MySet();
    let firstSet = this.values();
    firstSet.forEach((element) => {
      if (!otherSet.has(element)) {
        differenceSet.add(element);
      }
    });
  };

  //this method will test if the set is a subset of a different set
  subset = (otherSet) => {
    let firstSet = this.values();
    // the every method tests whether all elements in the array pass the test implemented by the provided function
    // it returns a boolean value (returns truthy if all elements in the array pass the test in the callback fuction)
    // parameters => 1. callback functiion =>  a function to execute for every element in the array
    // It should return a truthy value to indicate the element passes the test, and a falsy value otherwise. The function is called with the following arguments:
    // a. element => the current element being processef by the array
    // b. index => the index of the current element being processed in the array
    // array => the array the every method was called upon
    return firstSet.every((value) => {
      return otherSet.has(value);
    });
  };
}

const setA = new MySet();
const setB = new MySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log("a subset of b?", setA.subset(setB));
console.log("intersection", setA.intersection(setB).values());

//using built in set method
const setC = new Set();
const setD = new Set();
setC.add("a");
setD.add("b");
setD.add("c");
setD.add("a");
setD.add("d");
console.log("values", setD.values()); //instead of returning an array it returns an iterator which you can still iterate through
setD.delete("a");
console.log("has a after deleting?", setD.has("a"));
console.log("add d which it already has?", setD.add("d")); //this will not return true or false whether the element has been added or not, it will instead return the full set

// SLICE, SPLICE AND SPLIT METHODS
// SLICE
// slice method copies a given part of an array and returns that copied part as a new array
// slice method does not change the original array
// array.slice(from, until) => starting from a particular index but not including element at the final index

// SPLICE
// the splice method changes an array, by adding or removing elements from it
// for removing elements, we need to give the index parameter and the number of elements to be removed
// array.splice(index, number of elements)
// index is the starting point for removing elements
// elements which have a smaller index than the given index won't be removed
// array.splice(2) => every element starting from index 2 will be removed
// if we don't define the second parameter every element starting from the given index will be removed from the array
// array.splice(2, 1) => every item this function is called 1 element will be removed at index 2
// splice method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
// splice method is a mutating method because it changes the contents of the original array
// remove 0 elements before index 2 and insert "drum" => const removed = array.splice(2, 0, "drum")
// remove 0 elements before index 2 ans insert "drum" and "guitar" => array.splice(2, 0, "drum", "guitar")
// remove 1 element at index 3 => array.splice(3, 1)
// remove 1 element at index 2 and insert "trumpet" => array.splice(2, 1, "trumpet")
// Remove 2 elements from index 0, and insert "parrot", "anemone" and "blue" => array.splice(0, 2, "parrot", "anemone", blue)
// remove 2 elements starting from index 2 => array.splice(2, 2)
// remove 1 element at index -2 => array.splice(-2, 1) => removes second last element
// remove all elements starting from index 2 =>  array.splice(2)

// SPLIT
// split method is a string method that divides a string into substrings and returns them as an array
// it takes two parameters and both of them are optional
// string.split(sepatator, limit)
// separator => defines how to split a string eg by a comma or a charachter
// limit => limits the number of splits
// the split method does not work directly on arrays. however we can first convert the elements of the array into a string then we can use the split method
// myString = array.toString() => convert array to string
// let newArray = myString.split(",", 3) => split string by commas and limit them to three substrings and return them as a new array => limiting to 3 means only the first 3 elements will be returned
