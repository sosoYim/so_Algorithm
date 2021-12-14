/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

var longestSubstring = function (s, k) {
  if (k === 1) return s.length;
  let answer = 0;
  const hash = Array(26).fill(0);
  for (let x of s) {
    hash[x.charCodeAt() - 97] += 1;
  }
  for (let lt = 0; lt < s.length; lt++) {
    let rt = s.length - 1;
    const tempHash = [...hash];
    // console.log('기준 : ', lt, s[lt]);
    while (rt > lt) {
      // console.log(lt, rt, s[rt]);
      if (tempHash.every(val => val === 0 || val >= k)) {
        // console.log('GOTIT!', lt, rt);
        answer = Math.max(answer, rt - lt + 1);
        break;
      } else {
        tempHash[s[rt].charCodeAt() - 97] -= 1;
        rt -= 1;
      }
    }
    hash[s[lt].charCodeAt() - 97] -= 1;
  }
  return answer;
};
/** 혜연
 * const longestSubstring = (s, k) => {
  let answer = 0;
  const hash = new Array(26).fill(0);

  [...s].forEach((char, i) => {
    hash[s.charCodeAt(i) - 97]++;
  });

  for (let lt = 0; lt <= s.length - Math.max(k, answer); lt++) {
    const copiedHash = [...hash];
    let rt = s.length - 1;
    while (rt >= lt + Math.max(k, answer) - 1) {
      if (copiedHash.every(el => !el || el >= k)) {
        answer = Math.max(answer, rt - lt + 1);
      }
      copiedHash[s.charCodeAt(rt) - 97]--;
      rt--;
    }

    hash[s.charCodeAt(lt) - 97]--;
  }
  return answer;
};
 */

// var longestSubstring = function (s, k) {
//   if (k === 1) return s.length;

//   let maxUnique = new Set(s).size;
//   let maxLen = 0;

//   for (let i = 1; i <= maxUnique; i++) {
//     console.log(i, ' start : ');
//     const cnt = new Map();
//     let lt = 0,
//       currUnique = 0,
//       countAtLeastK = 0;

//     for (let rt = 0; rt < s.length; rt++) {
//       if (!cnt.has(s[rt])) currUnique++;
//       cnt.set(s[rt], (cnt.get(s[rt]) || 0) + 1);
//       if (cnt.get(s[rt]) === k) countAtLeastK++;
//       // if (cnt.get(s[rt]) === 1) currUnique++;
//       console.log(cnt);

//       while (currUnique > i) {
//         console.log(currUnique, s[rt]);
//         if (cnt.get(s[lt]) === k) countAtLeastK--;
//         cnt.set(s[lt], cnt.get(s[lt]) - 1);
//         if (cnt.get(s[lt]) === 0) currUnique--;
//         lt++;
//       }
//       if (currUnique === countAtLeastK) {
//         maxLen = Math.max(maxLen, rt - lt + 1);
//       }
//     }
//   }
//   return maxLen;
// };

// console.log(longestSubstring('ababbc', 2));
console.log(longestSubstring('bbaaacbd', 3));
