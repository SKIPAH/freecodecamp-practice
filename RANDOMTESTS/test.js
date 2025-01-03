class Node {
    constructor(data) {
        this.data = data;  // The value of the node
        this.left = null;  // The left child
        this.right = null; // The right child
    }
}

class BinaryTree {
    constructor() {
        this.root = null; // Start with an empty tree
    }

    // Add a new node to the tree
    insert(data) {
        const newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode; // If the tree is empty, set the root
        } else {
            this._insertNode(this.root, newNode); // Recursive helper
        }
    }

    _insertNode(node, newNode) {
        if (newNode.data < node.data) { // Go to the left if smaller
            if (node.left === null) {
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else { // Go to the right if larger or equal
            if (node.right === null) {
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }
}

// Example: Create a binary tree
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);

console.log(JSON.stringify(tree, null, 2)); // Print the tree structure
