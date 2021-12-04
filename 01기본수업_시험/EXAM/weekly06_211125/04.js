function solution(nums, t) {
  var answer = 0;
  const pow = Array(t + 1).fill(0);
  pow[1] = 1;
  if (t >= 2) {
    for (let i = 2; i <= t; i++) {
      pow[i] = pow[i - 1] * 2;
    }
  }
  // console.log(pow);
  const std = Array(nums.length).fill(0);

  for (let i = 0; i < std.length; i++) {
    let sum = 0;
    for (let j = 0; j < nums[i].length; j++) {
      sum += pow[nums[i][j]];
    }
    std[i] = sum;
  }
  // console.log(std);

  function DFS(L, s, bit) {
    if (L === t) return;
    for (let i = 0; i < std.length; i++) {
      if ((bit & std[i]) === std[i]) {
        return false;
      }
    }

    answer += 1;

    for (let i = s; i <= t; i++) {
      DFS(L + 1, i + 1, bit + pow[i]);
    }
  }
  DFS(0, 1, 0);
  return answer;
}

console.log(solution([[2], [1, 3]], 4));
