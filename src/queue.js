const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  getUnderlyingList() {
    if (!this.node) {
      return;
    }
    return this.node;
  }

  enqueue(value) {
    let newNode = new ListNode(value);

    if (!this.node) {
      this.node = newNode;
      return;
    }
    let currentNode = this.node;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }

  dequeue() {
    if (!this.node) {
      return null;
    }

    const removedNode = this.node;
    this.node = this.node.next;
    return removedNode.value;
  }
}

module.exports = {
  Queue,
};
