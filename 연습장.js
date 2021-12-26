/*
 * @lc app=leetcode id=131 lang=javascript
 *
 * [131] Palindrome Partitioning
 *
 * https://leetcode.com/problems/palindrome-partitioning/description/
 *
 * algorithms
 * Medium (56.27%)
 * Likes:    4897
 * Dislikes: 152
 * Total Accepted:    374K
 * Total Submissions: 664.7K
 * Testcase Example:  '"aab"'
 *
 * Given a string s, partition s such that every substring of the partition is
 * a palindrome. Return all possible palindrome partitioning of s.
 *
 * A palindrome string is a string that reads the same backward as forward.
 *
 *
 * Example 1:
 * Input: s = "aab"
 * Output: [["a","a","b"],["aa","b"]]
 * Example 2:
 * Input: s = "a"
 * Output: [["a"]]
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 16
 * s contains only lowercase English letters.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */

function isPalindrome(str) {
  let left = 0,
    right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}

var partition = function (s) {
  const result = [];

  // 시작 문자열 : slice(0,i) i = 1~str.length
  function DFS(str, parts) {
    const len = str.length;
    if (len === 0 && parts.length) result.push([...parts]);
    for (let i = 1; i <= len; i++) {
      const part = str.slice(0, i);
      // console.log({ i, part, rest: str.slice(i), parts });
      if (isPalindrome(part)) {
        parts.push(part);
        DFS(str.slice(i), parts);
        parts.pop();
      }
    }
  }

  DFS(s, []);
  return result;
};
// @lc code=end
