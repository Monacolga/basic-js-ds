const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  root() {
    if (!this.node) {
      return null;
    }
    return this.node;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.node) {
      this.node = newNode;
      return;
    }
    let currentNode = this.node;
    while (currentNode) {
      if (newNode.data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  has(data) {
    return searchElement(this.node, data);
    function searchElement(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      if (data < node.data) {
        return searchElement(node.left, data);
      }
      return searchElement(node.right, data);
    }
  }

  find(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree,
};

// const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require("../extensions/list-tree.js");

// /**
//  * Implement simple binary search tree according to task description
//  * using Node from extensions
//  */
// class BinarySearchTree {
//   constructor() {
//     this.rootNode = null;
//   }

//   root() {
//     return this.rootNode;
//   }

//   add(data) {
//     this.rootNode = addNode(this.rootNode, data);

//     function addNode(node, data) {
//       if (!node) {
//         return new Node(data);
//       }

//       if (data < node.data) {
//         node.left = addNode(node.left, data);
//       } else if (data > node.data) {
//         node.right = addNode(node.right, data);
//       }

//       return node;
//     }
//   }

//   has(data) {
//     return searchNode(this.rootNode, data);

//     function searchNode(node, data) {
//       if (!node) {
//         return false;
//       }

//       if (node.data === data) {
//         return true;
//       }

//       if (data < node.data) {
//         return searchNode(node.left, data);
//       } else {
//         return searchNode(node.right, data);
//       }
//     }
//   }

//   find(data) {
//     return findNode(this.rootNode, data);

//     function findNode(node, data) {
//       if (!node) {
//         return null;
//       }

//       if (node.data === data) {
//         return node;
//       }

//       if (data < node.data) {
//         return findNode(node.left, data);
//       } else {
//         return findNode(node.right, data);
//       }
//     }
//   }

//   remove(data) {
//     this.rootNode = removeNode(this.rootNode, data);

//     function removeNode(node, data) {
//       if (!node) {
//         return null;
//       }

//       if (data < node.data) {
//         node.left = removeNode(node.left, data);
//       } else if (data > node.data) {
//         node.right = removeNode(node.right, data);
//       } else {
//         if (!node.left && !node.right) {
//           return null;
//         }

//         if (!node.left) {
//           return node.right;
//         } else if (!node.right) {
//           return node.left;
//         }

//         let minRight = node.right;
//         while (minRight.left) {
//           minRight = minRight.left;
//         }

//         node.data = minRight.data;
//         node.right = removeNode(node.right, minRight.data);
//       }

//       return node;
//     }
//   }

//   min() {
//     if (!this.rootNode) {
//       return null;
//     }

//     let node = this.rootNode;
//     while (node.left) {
//       node = node.left;
//     }

//     return node.data;
//   }

//   max() {
//     if (!this.rootNode) {
//       return null;
//     }

//     let node = this.rootNode;
//     while (node.right) {
//       node = node.right;
//     }

//     return node.data;
//   }
// }

// module.exports = {
//   BinarySearchTree,
// };
