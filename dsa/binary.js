// binary search tree
// a tree data structure is a way to hold data that when visualized looks like a tree you would see in nature
// all data points in the structure are called nodes
// the top of the tree is called the root node and it branches out into additional nodes
// each additional node may have child nodes and so on
// nodes with braches leading to other nodes are referred to as the parent of the node of the branches that lead to the child
// leaf nodes are the nodes at the end of the tree with no children
// any children of the node are parents of their own subtree

// while a tree data structure can have any number of branches at a single node;a binary tree can only have two branches for every node
// furthermore binary search trees are ordered => each subtree is less than or equal to the parent node and each rigth subtree is grater than or equal to the parent node
// because they use the principal of binary search on average operations are able to skip about half of the tree so that each
// lookup, insertion or deletion takes time proportional to the number of items stored in the tree. this is much better than the linear time required to find elements by key in an unsorted array
// but slowet than the corresponding operations on a hash table

/* binary search tree */
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add = (data) => {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = (node) => {
        if (data < node.data) {
          if (node.left === null) {
            node.left === new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.left) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null; //if data is equal to node.data it will not be added to the tree and instead we will return null
        }
      };
      return searchTree(node);
    }
  };

  findMin = () => {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }

    return current.data;
  };

  findMax = () => {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  };

  find = (data) => {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  };

  isPresent = (data) => {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  };

  remove = (data) => {
    const removeNode = (node, data) => {
      if (node === null) {
        return null;
      }
      if (data === node.data) {
        // node has no children
        if (node.left === null && node.right === null) {
          return null; //returning null means setting the node that had that data to null
        }

        // node has no left child
        if (node.left === null) {
          return node.right; //replace node with the node on the right
        }

        // node has no right child
        if (node.right === null) {
          return node.left; //replace node with the node on the left
        }

        // node has two children
        const tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  };

  isBalanced() {
    return this.findMinHeight() >= this.findMaxHeight() - 1;
  }

  findMinHeight(node = this.root) {
    if (node == null) {
      return -1;
    }
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  findMaxHeight(node = this.root) {
    if (node == null) {
      return -1;
    }
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  inOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traverseInOrder(node) {
        node.left && traverseInOrder(node.left);
        result.push(node.data);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    }
  }

  preOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traversePreOrder(node) {
        result.push(node.data);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
      }
      traversePreOrder(this.root);
      return result;
    }
  }

  postOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traversePostOrder(node) {
        node.left && traversePostOrder(node.left);
        node.right && traversePostOrder(node.right);
        result.push(node.data);
      }
      traversePostOrder(this.root);
      return result;
    }
  }

  levelOrder() {
    let result = [];
    let Q = [];
    if (this.root != null) {
      Q.push(this.root);
      while (Q.length > 0) {
        let node = Q.shift();
        result.push(node.data);
        if (node.left != null) {
          Q.push(node.left);
        }
        if (node.right != null) {
          Q.push(node.right);
        }
      }
      return result;
    } else {
      return null;
    }
  }
}

const bst = new BinarySearchTree();
bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);
bst.remove(4);
console.log(bst.findMin());
console.log(bst.findMax());
console.log(bst.isPresent(4));

const traverseBST = new BinarySearchTree();
traverseBST.add(9);
traverseBST.add(4);
traverseBST.add(17);
traverseBST.add(3);
traverseBST.add(6);
traverseBST.add(22);
traverseBST.add(5);
traverseBST.add(7);
traverseBST.add(20);

console.log("min", traverseBST.findMinHeight());
console.log("max", traverseBST.findMaxHeight());
console.log("balanced", traverseBST.isBalanced());
traverseBST.add(10);
console.log("min", traverseBST.findMinHeight());
console.log("max", traverseBST.findMaxHeight());
console.log("balanced", traverseBST.isBalanced());
console.log("in order", traverseBST.inOrder());
console.log("pre order", traverseBST.preOrder());
console.log("post order", traverseBST.postOrder());
console.log("level order", traverseBST.levelOrder());

/**
 * finding tree height and tree traversal in a binary search tree
 * height of a tree refers to the distance between the root node to any given leaf node
 * a given tree will have a minimum height and a maximum height
 * and if the tree is balanced this values will differ at most by one
 * min height is distance between the root node and the first leaf node without two children
 * max height is the distance from the root node to the most bottom node
 * if a tree is balanced the difference between the min height and the max height will be at most one => difference has to be 0 or 1 in order for the tree to be balanced
 * when a tree is balanced then searching through it is much more efficient
 */

//look up how to make a tree automatically balance itself when you add new items and when you delete items
// this creates greater efficiency when searching the tree

/**
 * tree traversal methods can be used to explore tree data structures
 * and find all the values in the tree
 * a given subtree is explored as deeply as possible before the search continues on another subtree
 * kinds of traversal => in order traversal, pre order traversal, post order traversal, and level order traversal
 */

/**
 * BFS or breadth first search starts from the top of the node in the graph
 * and travels down until it reaches the root node.
 * on the other hand, DFS or a depth first search starts from the top  of the node and follows a path to reach the end of the node path
 */

// in order traversal => begin the search at the left most node and end at the right most node; this returns the values from the smallest to the largest in ascending order
// pre order traversal => explore the root nodes before the leaves
// post order traversal => explores the leaf nodes before the roots
// in order, pre order and post order are depth first searches
// level order traversal => *also called a breadth first search => it explores all the nodes in a given level within a tree before continuing onto the next level
