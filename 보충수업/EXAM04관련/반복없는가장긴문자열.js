const lengthOfLongestSubstring = function (s) {
  const strArr = s.split('');
  let lt = 0;
  let maxLength = 0;
  const sSet = new Set();
  for (let rt = 0; rt < strArr.length; rt++) {
    const compSetLen = sSet.size;
    sSet.add(strArr[rt]);

    if (compSetLen === sSet.size) {
      while (strArr[lt] !== strArr[rt]) {
        sSet.detele(strArr[rt]);
        lt += 1;
      }
      lt += 1;
    } else {
      Math.max(maxLength, rt - lt);
    }
  }
};

console.log(lengthOfLongestSubstring('abcabcbb'));
