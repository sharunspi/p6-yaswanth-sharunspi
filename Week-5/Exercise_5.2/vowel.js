function vowelCount(str) {
  if (typeof str === "string") {
    const vMap = new Map();
    for (const ele of str) {
      let formatedText = ele.toLowerCase();
      if (isVowel(formatedText)) {
        if (vMap.has(str)) {
          vMap.set(str, vMap.get(str) + 1);
        } else {
          vMap.set();
        }
      }
    }
  } else {
    throw new Error("Input is not a string");
  }
}

function isVowel(ele) {
  return "aeiou".includes(ele);
}
