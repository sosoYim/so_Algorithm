function solution(nums, k) {
  var answer = 0;
  nums.sort((a, b) => a - b);

  const uniques = new Set(nums);

  if (k === 0) {
    const countMap = new Map();
    for (let x of uniques) {
      countMap.set(x, nums.filter(v => v === x).length);
    }
    for (const [key, val] of countMap) {
      if (val >= 2) answer += 1;
      // else if (val > 2) answer += val;
    }
    return answer;
  }

  const nMap = new Map();
  for (let x of uniques) {
    nMap.set(x, x + k);
  }

  const uniquesArr = [...uniques];

  for (let x of uniquesArr) {
    if (nums.includes(nMap.get(x))) answer += 1;
  }

  return answer;
}

console.log(solution([1, 3, 1, 5, 4], 0)); // 1
// console.log(solution([3, 1, 4, 1, 5], 2)); // 2
// console.log(solution([1, 2, 4, 4, 3, 3, 0, 9, 2, 3], 3)); // 2
