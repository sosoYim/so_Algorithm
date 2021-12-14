/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
// var longestSubarray = function (nums, limit) {
//   let answer = 0;
//   for (let lt = 0; lt < nums.length; lt++) {
//     let rt = lt;
//     let min = nums[lt];
//     let max = nums[rt];
//     let maxDiff = 0;
//     while (rt < nums.length) {
//       if (maxDiff <= limit) {
//         rt += 1;
//         min = Math.min(min, nums[rt]);
//         max = Math.max(max, nums[rt]);
//         maxDiff = Math.max(maxDiff, Math.abs(min - max));
//         // console.log(lt, rt, 'diff', maxDiff, 'min:', min, 'max:', max);
//       } else {
//         answer = Math.max(answer, rt - lt);
//         break;
//       }
//     }
//     answer = Math.max(answer, rt - lt);
//   }
//   return answer;
// };

var longestSubarray = function (nums, limit) {
  const maxD = [];
  const minD = [];
  let lt = 0;
  for (let x of nums) {
    while (maxD.length && maxD[0] < x) maxD.shift();
    while (minD.length && minD[0] > x) minD.shift();
    maxD.push(x);
    minD.push(x);
    console.log(maxD, minD);
    if (Math.abs(minD[0] - maxD[0]) > limit) {
      if (maxD[0] === nums[lt]) maxD.shift();
      if (maxD[0] === nums[lt]) minD.shift();
      lt += 1;
    }
  }
  return nums.length - lt;
};

console.log(longestSubarray([10, 1, 2, 4, 7, 2], 5));
