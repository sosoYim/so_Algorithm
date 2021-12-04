function solution(n, k) {
  let result = 0;
  const num = n.toString(k);
  const nums = [];
  let tmp = '';
  for (let x of num) {
    if (x === '0') {
      if (tmp !== '') {
        nums.push(parseInt(tmp));
        tmp = '';
      }
    } else {
      tmp += x;
    }
  }
  if (tmp !== '') nums.push(parseInt(tmp));

  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  for (let x of nums) {
    if (isPrime(x)) result += 1;
  }

  return result;
}

console.log(solution(437647, 3));
