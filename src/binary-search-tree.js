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
    const searchTree = function (node) {
      if (data < node.data) {
        if (!node.left) {
          node.left = newNode;
          return;
        } else {
          return searchTree(node.left);
        }
      } else if (data > node.data) {
        if (!node.right) {
          node.right = newNode;
          return;
        } else {
          return searchTree(node.right);
        }
      } else {
        return null;
      }
    };
    return searchTree(this.node);
  }

  has(data) {
    let current = this.node;
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
    this.node = removeNode(this.node, data);
    function removeNode(node, data) {
      if (node === null) {
        return null;
      }
      if (data === node.data) {
        if (node.left === null && node.right === null) {
          return null;
        }
        if (node.left === null) {
          return node.right;
        }
        if (node.right === null) {
          return node.left;
        }
        let tempNode = node.right;
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
