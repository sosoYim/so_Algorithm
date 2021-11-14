/**
 * 152. Maximum Product Subarray  
 * https://leetcode.com/problems/maximum-product-subarray/
Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.
It is guaranteed that the answer will fit in a 32-bit integer.

A subarray is a contiguous subsequence of the array.

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 */

const maxProduct = nums => {
  let [max, min, ans] = [nums[0], nums[0], nums[0]];

  for (let i = 1; i < nums.length; i++) {
    const [_max, _min] = [max, min];

    max = Math.max(nums[i], nums[i] * _max, nums[i] * _min);
    min = Math.min(nums[i], nums[i] * _max, nums[i] * _min);

    ans = Math.max(ans, max);
  }
  return ans;
};

console.log(maxProduct([2, 3, -2, 4]));
// console.log(maxProduct([-2]));
