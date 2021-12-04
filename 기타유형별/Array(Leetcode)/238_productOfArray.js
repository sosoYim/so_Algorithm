/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const zero = nums.filter(v => v === 0).length;
  if (zero >= 2) {
    return Array(nums.length).fill(0);
  } else if (zero === 1) {
    const productWitoutZero = nums.reduce((acc, val) => (val === 0 ? acc : acc * val), 1);
    return nums.map(v => (v === 0 ? productWitoutZero : 0));
  } else {
    const product = nums.reduce((acc, val) => acc * val, 1);
    return nums.map(v => product / v);
  }
};

// 참고
// 현재값이 0이 아니면 전체 곱 / 현재 값
// 현재값이 0이면 reduce 메서드를 이용해 현재 인덱스 값 제외 모든 곱 (-0이 나오기도 하는데 갠춘?)
// const productExceptSelf = nums => {
//   const totalProd = nums.reduce((acc, x, j) => acc * x)
//   return nums.map((x, i, arr) => x ? totalProd / x : arr.reduce((acc, x, j) => i === j ? acc : acc * x, 1))
// }

console.log(productExceptSelf([-1, 1, 0, -3, 3])); //[0,0,9,0,0]
