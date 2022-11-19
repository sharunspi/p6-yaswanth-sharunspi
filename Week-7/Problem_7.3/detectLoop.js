let head;
// for printing list
function printLinkeList(node) {
  while (node != null) {
    console.log(node.value + "->");
    node = node.next;
  }
}
// single node template
function Node(value) {
  this.value = value;
  this.next = null;
}
// if there is a loop in linked
function detectLoop(n) {
  var s = new Set();
  while (n != null) {
    if (s.has(n)) {
      return true;
    }
    s.add(n);

    n = n.next;
  }

  return false;
}
// data creation
head = new Node(85);
head.next = new Node(15);
head.next.next = new Node(4);
head.next.next.next = new Node(20);

detectLoop(head);

// ......
// Time Complexity : O(n)
// Space Complexity : O(n)
