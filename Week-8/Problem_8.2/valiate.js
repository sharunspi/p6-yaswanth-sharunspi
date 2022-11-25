let construct, construct1;
// node
function Node(content) {
  this.content = content;
  this.leftSide = null;
  this.rightSide = null;
}
let oldVal;
function findValid(ele) {
  // check weather the data is null
  if (ele != null) {
    if (!findValid(ele.leftSide)) {
      return false;
    }
    // check value is distinct
    if (oldVal != null && ele.content <= oldVal.content) {
      return false;
    }
    oldVal = ele;
    return findValid(ele.rightSide);
  }
  return true;
}

construct = new Node(2);
construct.leftSide = new Node(1);
construct.rightSide = new Node(3);
console.log(construct);
console.log(findValid(construct));

construct1 = new Node(5);
construct1.leftSide = new Node(1);
construct1.rightSide = new Node(4);
construct1.rightSide.leftSide = new Node(3);
construct1.rightSide.rightSide = new Node(6);
console.log(construct1);
console.log(findValid(construct1));
