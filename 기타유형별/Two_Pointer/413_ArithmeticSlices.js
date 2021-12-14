/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
  if (nums.length < 3) return 0;
  let diff = nums[1] - nums[0];
  let answer = 0;
  let lt = 0;
  for (let rt = 2; rt < nums.length; rt++) {
    // diff 가 달라진 경우 같을때 까지 돌린다.
    while (nums[rt] - nums[rt - 1] !== diff && lt < rt) {
      lt += 1;
      diff = nums[lt + 1] - nums[lt];
    }
    const len = rt - lt + 1;
    if (len >= 3) answer = answer + len - 2;
  }
  return answer;
};

console.log(numberOfArithmeticSlices([1, 2, 3, 4])); // 3
