function hasDuplicate(arr) {
  // check the argument contains value and it is having length proporty
  if (arr && arr.length > 0) {
    const uniqArr = new Set(arr);
    if (uniqArr.size !== arr.length) {
      return true;
    }
    return false;
  } else {
    // throw error when the argument is not having length
    throw new Error("Input is not an array/string");
  }
}

// hasDuplicate({});
console.log(hasDuplicate([1, 2, 4, 1]));
