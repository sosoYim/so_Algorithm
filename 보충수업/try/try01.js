function isPrime(k) {
  if (k < 2) return false;
  for (let i = 2; i * i <= k; i++) {
    if (k % i === 0) return false;
  }
  return true;
}
function solution(n, k) {
  // k = 진수
  let kbit = n.toString(k);

  // 0이 아니고 숫자들이 연결되는 것들만 뽑아내기
  const nums = [];
  const answer = [];
  let tmp = '';
  for (let x of kbit) {
    if (x !== '0') {
      tmp += x;
    } else {
      if (tmp.length > 0) {
        nums.push(parseInt(tmp));
        tmp = '';
      }
    }
  }
  if (tmp !== '') nums.push(parseInt(tmp));

  for (let x of nums) {
    if (isPrime(x)) answer.push(x);
  }
  return answer.length;
}

// console.log(solution(53040, 3));
// console.log(solution(437674, 3));
console.log(solution(110011, 10));
