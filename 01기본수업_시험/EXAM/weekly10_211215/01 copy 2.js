function solution(nums) {
  // var answer = 0;
  const left = [nums[0]];
  const right = nums.slice(1);
  let leftMax = nums[0];
  // nums i 인덱스 이적까지 최소값
  let min = Array(nums.length).fill(Number.MAX_SAFE_INTEGER);
  min[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.min(nums[i - 1], nums[i]);
  }

  for (let i = 1; i < nums.length; i++) {
    
  }
  return left.length;
}

// console.log(solution([5, 0, 3, 8, 6]));
console.log(solution([0, 1]));
