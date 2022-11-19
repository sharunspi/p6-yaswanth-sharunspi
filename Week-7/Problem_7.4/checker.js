function checker(exprsion) {
  // stack
  let stack = [];
  let length = exprsion.length;

  for (let i = 0; i < length; i++) {
    let ele = exprsion[i];

    if (ele == "[" || ele == "(" || ele == "{") {
      stack.push(ele);
      continue;
    }
    if (stack.length === 0) {
      return false;
    }

    let check;
    switch (ele) {
      case ")":
        check = stack.pop();
        if (check == "{" || check == "[") return false;
        break;
      case "]":
        check = stack.pop();
        if (check == "(" || check == "{") return false;
        break;
      case "}":
        check = stack.pop();
        if (check == "(" || check == "[") return false;
        break;
    }
  }

  return stack.length == 0;
}

// input
let input = "([{}])";

console.log(" Output :", checker(input));
// ......
// Time Complexity : O(n)
// Space Complexity : O(n)
