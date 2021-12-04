/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumMountainRemovals = function (nums) {
  const increaseLen = Array(nums.length).fill(1);
  const decreaseLen = Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) increaseLen[i] = Math.max(increaseLen[i], increaseLen[j] + 1);

      //   console.log(`j${j}:i${i}  ${nums[j]}:${nums[i]} : len ${len}`);
    }
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) decreaseLen[i] = Math.max(decreaseLen[i], decreaseLen[j] + 1);
    }
  }
  let mountainLen = 0;
  for (let i = 0; i < nums.length; i++) {
    if (increaseLen[i] !== 1 && decreaseLen[i] !== 1) {
      //   console.log(i, increaseLen[i], decreaseLen[i]);
      mountainLen = Math.max(mountainLen, increaseLen[i] + decreaseLen[i] - 1);
    }
  }
  return nums.length - mountainLen;
};

console.log(minimumMountainRemovals([2, 1, 1, 5, 6, 2, 3, 1])); //3
