let construct = null;
// node
function Node(content) {
  this.content = content;
  this.leftSide = null;
  this.rightSide = null;
}

function showCurrentLevel() {
  let height = showCurrentLevel(construct);
  let i;
  for (i = 0; i <= height; i++) {
    getCurrentLevel(construct, i);
  }
}

function showCurrentLevel(ele) {
  if (ele == null) {
    return 0;
  } else {
    let leftHeight = showCurrentLevel(ele.leftSide);
    let rightHeight = showCurrentLevel(ele.rightSide);
    if (leftHeight > rightHeight) {
      return leftHeight + 1;
    } else {
      return rightHeight + 1;
    }
  }
}

function getCurrentLevel(ele, levl) {
  if (ele == null) {
    return;
  }

  if (levl == 1) {
    console.log(ele.content);
  } else if (levl > 1) {
    getCurrentLevel(ele.leftHeight, levl - 1);
    getCurrentLevel(ele.rightHeight, levl - 1);
  }
}

construct = new Node(3);
construct.leftSide = new Node(9);
construct.rightSide = new Node(20);
construct.rightSide.leftSide = new Node(15);
construct.rightSide.rightSide = new Node(7);
console.log(construct);
console.log(showCurrentLevel(construct));

// construct1 = new Node(5);
// construct1.leftSide = new Node(1);
// construct1.rightSide = new Node(4);
// construct1.rightSide.leftSide = new Node(3);
// construct1.rightSide.rightSide = new Node(6);
// console.log(construct1);
// console.log(findValid(construct1));
