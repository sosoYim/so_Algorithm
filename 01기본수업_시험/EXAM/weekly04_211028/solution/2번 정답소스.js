function solution(n, k) {
  let answer = 0;
  let changed = [];
  let tmp = n;
  while (tmp > 0) {
    changed.push(tmp % k);
    tmp = parseInt(tmp / k);
  }
  changed.reverse();
  let number = [];
  let res = 0;
  for (let x of changed) {
    if (x === 0) {
      if (res !== 0) number.push(res);
      res = 0;
    } else res = res * 10 + x;
  }
  if (res !== 0) number.push(res);
  for (let x of number) {
    if (x <= 1) continue;
    let isPrime = 1;
    for (let i = 2; i * i <= x; i++) {
      if (x % i == 0) {
        isPrime = 0;
        break;
      }
    }
    if (isPrime === 1) answer++;
  }
  return answer;
}

console.log(solution(278945, 2)); //1
console.log(solution(5094493, 9)); //1
console.log(solution(3547, 2)); //3
console.log(solution(455, 4)); //2
console.log(solution(28215, 8)); //2
console.log(solution(12, 7)); //0
console.log(solution(666675, 4)); //3
console.log(solution(61121123, 2)); //2
console.log(solution(7621365, 9)); //1
console.log(solution(913795270, 2)); //5
