/**
 * @param {string} s
 * @return {number}
 */
const longestPalindromeSubseq = s => {
  //   const dp = [...Array(s.length)].map(() => Array(s.length).fill(0));

  let len = s.length;
  let dp = Array.from(Array(len), () => Array(len).fill(0));

  for (let i = 0; i < s.length; i++) {
    dp[i][i] = 1;
  }

  for (let i = 1; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (j + i < s.length) {
        dp[j][j + i] =
          s[j] === s[j + i]
            ? dp[j + 1][j + i - 1] + 2
            : Math.max(dp[j][j + i - 1], dp[j + 1][i + j]);
      }
    }
  }

  return dp[0][len - 1];
};

console.log(longestPalindromeSubseq('bbbab')); // 4
