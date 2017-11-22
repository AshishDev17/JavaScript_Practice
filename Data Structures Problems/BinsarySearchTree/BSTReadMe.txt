1. What is Tree?
A tree is a nonlinear data structure that is used to store data in a hierarchical manner. Tree data structures are used to store hierarchical data, such as the files in a file system, and for storing sorted lists of data. The top node of a tree is called the root node. If a node is connected to other nodes below it, the preceding node is called the parent node, and the nodes following it are called child nodes. A node can have zero, one, or more child nodes connected to it. A node without any child nodes is called a leaf node.

2. What is a Binary Search Tree?
A binary search tree is a binary tree in which data with lesser values are stored in left nodes and data with greater values are stored in right nodes. This property provides for very efficient searches and holds for both numeric data and non-numeric data, such as words and strings.

A tree is made up of a set of nodes connected by edges. Binary trees, restrict the number of child nodes to no more than two.
We can travel from one node to other nodes that are not directly connected. The series of edges we follow to get from one node to another node is called a path. The child nodes of a parent node are referred to as the left node and the right node.

A node at any level is considered the root of a subtree, which consists of that root node’s children, its children’s children, and so on. We can define the depth of a tree as the number of layers in the tree.

Binary trees are chosen over other more primary data structures because
- you can search a binary tree very quickly (as opposed to a linked list, for example)
- you can quickly insert and delete data from a binary tree (as opposed to an array)

3. How many types of tree traversals are there for BST?
Visiting all the nodes in a tree in some particular order is known as a tree traversal.

There are three traversal functions used with BSTs:

Inorder - An inorder traversal visits all of the nodes of a BST in ascending order of the node key values.

Preorder - A preorder traversal visits the root node first, followed by the nodes in the sub‐ trees under the left child of the root node, followed by the nodes in the subtrees under the right child of the root node.

Postorder - A postorder traversal visits all of the child nodes of the left subtree up to the root node, and then visits all of the child nodes of the right subtree up to the root node.
