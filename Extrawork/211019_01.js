function solution(str) {
  const arr = str.split('');
  let tmp = '';
  const numbers = [];
  const primes = [];

  // 숫자를 뽑아 내라
  for (let x of arr) {
    if (isNaN(x)) {
      if (tmp > 0) {
        numbers.push(parseInt(tmp));
        tmp = '';
      }
    } else {
      tmp += x + '';
    }
  }
  // 마지막 숫자까지 남김없이!
  if (tmp !== '') numbers.push(parseInt(tmp));

  // 숫자 중 소수를 반환
  for (let x of numbers) {
    if (isPrime(x)) primes.push(x);
  }

  return primes;
}

function isPrime(k) {
  let flag = true;
  for (let i = 2; i * i <= k; i++) {
    if (k % i === 0) {
      flag = false;
      break;
    }
  }
  return flag;
}

// console.log(solution('13ab235cd21of34e11'));
console.log(solution('13ab23d5cd21of34e11'));
