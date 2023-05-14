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
