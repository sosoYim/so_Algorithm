function solution(nums, m) {
  // let answer;
  while (m > 0) {
    const shorten = [];
    nums.forEach((v, i, arr) => {
      if (i === 0) return;
      return shorten.push(v - arr[i - 1]);
    });
    nums = shorten;
    m--;
  }
  return nums;
}
// console.log(solution([5, 3, 7, 9, -2], 1));
console.log(solution([5, 3, 7, 9, -2], 2)); // [6, -2,-13]
