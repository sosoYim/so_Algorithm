// https://leetcode.com/problems/find-k-th-smallest-pair-distance/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function (nums, k) {
  nums.sort((a, b) => a - b);
  const dist = new Map();
  for (let i = 0; i < nums.length; i++) {
    const comp = i === nums.length - 1 ? nums[0] : nums[i + 1];
    const abs = Math.abs(nums[i] - comp);
    // console.log('abs', nums[i], comp, abs);

    const tmpDist = new Map();

    for (const [key, val] of dist) {
      tmpDist.set(key + abs, (tmpDist.get(key + abs) || 0) + 1);
    }
    // console.log('tmpDist', tmpDist);

    for (const [key, val] of tmpDist) {
      dist.set(key, (dist.get(key) || 0) + val);
    }
    dist.set(abs, (dist.get(abs) || 0) + 1);
    // console.log('dist', dist);
  }

  const distArr = [];
  for (const [key, val] of dist) {
    distArr.push(...Array(val).fill(key));
  }
  distArr.sort((a, b) => a - b);
  // console.log(distArr);
  return distArr[k - 1];
};

// console.log(smallestDistancePair([1, 3, 1], 1));
console.log(smallestDistancePair([1, 1, 1, 3], 1));
// console.log(smallestDistancePair([1, 3, 4, 5], 1));
