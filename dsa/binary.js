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
