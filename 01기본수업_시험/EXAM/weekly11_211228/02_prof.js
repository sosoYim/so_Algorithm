function solution(nums) {
  // 0: 짝수, 1: 홀수
  let cnt = { 0: 1, 1: 0 };
  let answer = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum % 2 == 1) {
      // 총합이 홀수면 => 지금까지의 짝수 갯수를 뺀 값이 홀수다
      // answer에 짝수 갯수 더함
      answer += cnt[0];
    } else {
      // 총합이 짝수면 => 지금까지의 홀수 갯수를 뺀 값이 홀수다.
      // answer에 홀수 갯수 더함
      answer += cnt[1];
    }
    cnt[sum % 2]++;
  }
  return answer;
}
console.log(solution([1, 3, 5])); //4
console.log(solution([2, 4, 6, 8, 10])); //0
console.log(solution([1])); //1
console.log(solution([1, 2, 6, 2, 4, 3, 5, 3, 5, 3, 6, 3, 5, 4, 2, 3, 5, 1, 4, 3, 6])); //121
console.log(
  solution([6, 5, 4, 5, 5, 5, 4, 5, 6, 7, 8, 10, 1, 2, 12, 23, 33, 1, 1, 2, 3, 4, 5, 6, 7])
); //169
console.log(solution([100, 99, 98, 90, 55, 33, 23, 45, 56, 7, 8, 12])); //42
console.log(solution([2])); //0
console.log(solution([5])); //1
console.log(solution([3, 5])); //2
console.log(solution([1, 8])); //2
