// simple way
function binaryTreeDepth(arry) {
  let length = arry.length;
  return Math.log2(length + 1);
}
console.log(binaryTreeDepth([3, 9, 20, null, null, 15, 7]));

// depth
let construct;
// node
function Node(content) {
  this.content = content;
  this.leftSide = null;
  this.rightSide = null;
}

function findTheDepth(ele) {
  if (ele == null) {
    return 0;
  } else {
    let leftDepth = findTheDepth(ele.leftSide);
    let rightDepth = findTheDepth(ele.rightSide);
    if (leftDepth > rightDepth) {
      return leftDepth + 1;
    } else {
      return rightDepth + 1;
    }
  }
}

construct = new Node(3);
construct.leftSide = new Node(9);
construct.rightSide = new Node(20);
construct.leftSide.leftSide = new Node(null);
construct.leftSide.rightSide = new Node(null);
construct.rightSide.leftSide = new Node(15);
construct.rightSide.rightSide = new Node(7);
console.log(construct);
console.log(findTheDepth(construct));
