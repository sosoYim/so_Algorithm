function solution(nums) {
  // var answer = 0;
  const left = [nums[0]];
  const right = nums.slice(1);
  let leftMax = nums[0];
  // let rightMin = Math.min(...right);

  const minQ = [];
  for (let i = 0; i < right.length; i++) {
    while (minQ.length && minQ[minQ.length - 1] > right[i]) minQ.pop();
    minQ.push(right[i]);
  }

  for (let i = 1; i < nums.length; i++) {
    if (minQ[0] <= leftMax) {
      if (minQ[0] === nums[i]) minQ.shift();
      leftMax = Math.max(leftMax, nums[i]);
      left.push(right.shift());
      console.log({ max: minQ[0], leftMax, i });
    } else {
      break;
    }
  }
  return left.length;
}

// console.log(solution([5, 0, 3, 8, 6]));
console.log(solution([0, 1]));
