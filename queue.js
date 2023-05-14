// sort the elements in a queue
function sortQueue(queue) {
  const elements = [];
  while (queue.head !== null) {
    elements.push(queue.dequeue());
  }
  elements.sort();
  for (let i = 0; i < elements.length; i++) {
    queue.enqueue(elements[i]);
  }
}

// find specific element in a queue
function findElementInQueue(queue, element) {
  let currentNode = queue.head;
  while (currentNode !== null) {
    if (currentNode.element === element) {
      return currentNode;
    }
    currentNode = currentNode.next;
  }
  return null;
}
