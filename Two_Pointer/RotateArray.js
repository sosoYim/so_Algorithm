// nums 그대로 반환됨. 다른 배열에 담으면 안됨

const rotate = function (nums, k) {
  k = k % nums.length;
  const afterRotate = nums.splice(-k, k);
  nums.unshift(...afterRotate);
  return nums;
};
// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate([1, 2], 5));
// console.log(rotate([1, 2, 3], 4));
