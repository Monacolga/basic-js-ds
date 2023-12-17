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
    this.node = addElement(this.node, data);
    function addElement(node, data) {
      if (!node) {
        return newNode;
      }
      if (data < node.data) {
        node.left = addElement(node.left, data);
      } else {
        node.right = addElement(node.right, data);
      }
      return node;
    }
    ////////////
    //   const newNode = new Node(data);
    //   if (!this.node) {
    //     this.node = newNode;
    //     return;
    //   }
    //   let currentNode = this.node;
    //   while (currentNode) {
    //     if (newNode.data < currentNode.data) {
    //       if (!currentNode.left) {
    //         currentNode.left = newNode;
    //         return;
    //       }
    //       currentNode = currentNode.left;
    //     } else {
    //       if (!currentNode.right) {
    //         currentNode.right = newNode;
    //         return;
    //       }
    //       currentNode = currentNode.right;
    //     }
    //   }
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

  find(data) {
    return findElement(this.node, data);
    function findElement(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        return findElement(node.left, data);
      }
      return findElement(node.right, data);
    }
  }

  remove(data) {
    return removeNode(this.node, data);
    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    let node = this.node;
    if (!node) {
      return null;
    }
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    let node = this.node;
    if (!node) {
      return null;
    }
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
