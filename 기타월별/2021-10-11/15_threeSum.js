var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  const chResult = new Set();

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    const sum = nums[i];
    const tmpSet = new Set();

    for (let j = i + 1; j < nums.length - 1; j++) {
      if (tmpSet.has(nums[j])) continue;

      for (let k = j + 1; k < nums.length; k++) {
        if (nums[j] + nums[k] + sum === 0) {
          tmpSet.add(nums[j]);
          const ch = [nums[i], nums[j], nums[k]].sort().join('-');
          // 중복 답 제거 위한 것. 나중에 빼도 됨
          if (!chResult.has(ch)) {
            chResult.add(ch);
            result.push([nums[i], nums[j], nums[k]]);
          }
        }
      }
    }
  }
  return result;
};

// console.log(
//   threeSum([
//     -13, 5, 13, 12, -2, -11, -1, 12, -3, 0, -3, -7, -7, -5, -3, -15, -2, 14, 14, 13, 6, -11, -11, 5,
//     -15, -14, 5, -5, -2, 0, 3, -8, -10, -7, 11, -5, -10, -5, -7, -6, 2, 5, 3, 2, 7, 7, 3, -10, -2,
//     2, -12, -11, -1, 14, 10, -9, -15, -8, -7, -9, 7, 3, -2, 5, 11, -13, -15, 8, -3, -7, -12, 7, 5,
//     -2, -6, -3, -10, 4, 2, -5, 14, -3, -1, -10, -3, -14, -4, -3, -7, -4, 3, 8, 14, 9, -2, 10, 11,
//     -10, -4, -15, -9, -1, -1, 3, 4, 1, 8, 1,
//   ])
// );
console.log(threeSum([0, 0, 0]));
