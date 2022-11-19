// queue structure
class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  //   push data
  enQueue(x) {
    while (this.stack1.length != 0) {
      this.stack2.push(this.stack1.pop());
    }

    // add new element
    this.stack1.push(x);

    while (this.stack2.length != 0) {
      this.stack1.push(this.stack2.pop());
    }
  }

  // remove element
  deQueue() {
    if (this.stack1.length == 0) {
      return "Empty";
    }

    let x = this.stack1[this.stack1.length - 1];
    this.stack1.pop();
    return x;
  }
  getQueue() {
    return "stack 1 " + this.stack1 + "stack 2" + this.stack2;
  }
}
// new queue
let q = new Queue();
q.enQueue(1);
q.enQueue(2);
q.enQueue(3);

console.log(q.deQueue());
console.log(q.deQueue());
console.log(q.deQueue());
q.getQueue();
// ......
// Time Complexity : O(n)
// Space Complexity : O(n)
