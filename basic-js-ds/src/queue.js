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
  constructor() {
    this.tailNode = null;
    this.headNode = null;
  }

  getUnderlyingList() {
    return this.headNode;
  }

  enqueue(value) {
    let node = new ListNode(value);
    if (!this.headNode) {
      this.headNode = node;
    } else {
      let currentListNode = this.headNode;
      while (currentListNode.next) {
        currentListNode = currentListNode.next;
      }
      currentListNode.next = node;
    }
  }

  dequeue() {
    if (!this.headNode) {
      return null;
    }
    let deletedHead = this.headNode.value;

    if (this.headNode.next) {
      this.headNode = this.headNode.next;
    } else {
      this.headNode = null;
    }
    return deletedHead;
  }
}

module.exports = {
  Queue,
};
