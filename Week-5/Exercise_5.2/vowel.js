// to cocunt vowels in string
function vowelCount(str) {
  // check is it string
  if (typeof str === "string") {
    const vMap = new Map();
    for (const ele of str) {
      let formatedText = ele.toLowerCase();
      if (isVowel(formatedText)) {
        if (vMap.has(str)) {
          vMap.set(str, vMap.get(str) + 1);
        } else {
          vMap.set(str, 1);
        }
      }
    }
    return vMap;
  } else {
    throw new Error("Input is not a string");
  }
}

// vowel finder
function isVowel(ele) {
  return "aeiou".includes(ele);
}

let newmap = vowelCount("teacher");
console.log(newmap);
