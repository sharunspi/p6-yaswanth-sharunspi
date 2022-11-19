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
// n should be greater than the length of linked list
function rotate(n, head) {
  if (n == 0) return;

  let current = head;

  let count = 1;
  while (count < n && current != null) {
    current = current.next;
    count++;
  }

  if (current == null) return;

  var nthNode = current;

  while (current.next != null) current = current.next;

  current.next = head;

  head = nthNode.next;

  nthNode.next = null;
}
// data creation
head = new Node(85);
head.next = new Node(15);
head.next.next = new Node(4);
head.next.next.next = new Node(20);

console.log("Normal list");
printLinkeList(head);

head = rotate(10, head);
console.log("rotated list");
printLinkeList(head);

// ......
// Time Complexity : O(n)
// Space Complexity : O(1)
