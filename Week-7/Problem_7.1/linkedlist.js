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
// reverse
function reverse(node) {
  var prev = null;
  var current = node;
  var next = null;
  while (current != null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  node = prev;
  return node;
}
// data creation
head = new Node(85);
head.next = new Node(15);
head.next.next = new Node(4);
head.next.next.next = new Node(20);

console.log("Normal list");
printLinkeList(head);

head = reverse(head);
console.log("Reversed list");
printLinkeList(head);

// ......
// Time Complexity : O(n)
// Space Complexity : O(1)
