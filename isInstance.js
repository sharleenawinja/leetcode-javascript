// check if object is an instance of a class

function checkIfInstance(objectName, className) {
  // The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value.

  return objectName instanceof className;
}

class Animal {
  constructor(sound) {
    this.name = sound;
  }
}

const dog = new Animal("bark");

const testObject = {
  property: "testProperty",
  secondProperty: "second test property",
};

console.log(checkIfInstance(dog, Animal));
console.log(checkIfInstance(testObject, Animal));
