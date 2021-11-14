/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/** 33.Search in Rotated Sorted Array
 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 * There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
You must write an algorithm with O(log n) runtime complexity.

 
Constraints:
1 <= nums.length <= 5000
-104 <= nums[i] <= 104
All values of nums are unique.
nums is an ascending array that is possibly rotated.
-104 <= target <= 104
 */
var search = function (nums, target) {
  // return nums.indexOf(target);
  let lt = 0;
  let rt = nums.length;
  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    console.log(mid);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) lt = mid + 1;
    else rt = mid - 1;
  }
  return -1;
};

// const nums = [4, 5, 6, 7, 0, 1, 2];
// const target = 0;
const nums = [3, 1];
const target = 3;
console.log(search(nums, target));
