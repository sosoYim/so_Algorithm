/*
 * @lc app=leetcode id=1481 lang=javascript
 *
 * [1481] Least Number of Unique Integers after K Removals
 *
 * https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/description/
 *
 * algorithms
 * Medium (59.00%)
 * Likes:    694
 * Dislikes: 59
 * Total Accepted:    57.8K
 * Total Submissions: 97.7K
 * Testcase Example:  '[5,5,4]\n1'
 *
 * Given an array of integers arr and an integer k. Find the least number of
 * unique integers after removing exactly k elements.
 *
 *
 *
 *
 *
 * Example 1:
 *
 *
 * Input: arr = [5,5,4], k = 1
 * Output: 1
 * Explanation: Remove the single 4, only 5 is left.
 *
 * Example 2:
 *
 *
 * Input: arr = [4,3,1,1,3,3,2], k = 3
 * Output: 2
 * Explanation: Remove 4, 2 and either one of the two 1s or three 3s. 1 and 3
 * will be left.
 *
 *
 * Constraints:
 *
 *
 * 1 <= arr.length <= 10^5
 * 1 <= arr[i] <= 10^9
 * 0 <= k <= arr.length
 *
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
  const nMap = new Map();
  for (let num of arr) {
    nMap.set(num, (nMap.get(num) || 0) + 1);
  }

  const lists = [...nMap.entries()].sort((a, b) => {
    return a[1] - b[1];
  });
  for(let [_,cnt] of lists){
    if(cnt<=k) k-=cnt;
    else // 아우 for idx 찾아야 함
  }
};
// @lc code=end
console.log(findLeastNumOfUniqueInts([4, 3, 1, 1, 3, 3, 2], 3));
