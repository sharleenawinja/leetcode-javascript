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
          return null;
        }

        // node has no left child
        if (node.left === null) {
          return node.right;
        }

        // node has no right child
        if (node.right === null) {
          return node.left;
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
