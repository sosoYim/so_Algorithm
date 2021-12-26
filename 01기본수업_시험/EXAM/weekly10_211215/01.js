function solution(nums) {
  // var answer = 0;
  const left = [nums[0]];
  const right = nums.slice(1);
  let max = nums[0];
  const minQ = [];
  for (let i = 0; i < right.length; i++) {
    while (minQ.length && minQ[minQ.length - 1] >= right[i]) minQ.pop();
    minQ.push([right[i], i]);
  }

  for (let i = 1; i < nums.length; i++) {
    if (max >= minQ[0][0]) {
      const [_, idx] = minQ.shift();
      left.push([...right.slice(0, idx + 1)]);
      right.splice(idx);
      i = idx;
      max = Math.max(...left);
    } else break;
  }
  return left.length;
}

console.log(solution([5, 0, 3, 8, 6]));
