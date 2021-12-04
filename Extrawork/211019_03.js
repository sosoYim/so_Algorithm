function solution(left, right) {
  let bitCnt = 0;
  for (let i = left; i <= right; i++) {
    const bit = i.toString(2).match(/1/g);

    if (isPrime(bit.length)) bitCnt += 1;
  }
  return bitCnt;
}

function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// console.log(solution(6, 10));
console.log(solution(10, 15));

/**
 * 
 * Input: left = 6, right = 10
Output: 4
Explanation:
6  -> 110 (2 set bits, 2 is prime)
7  -> 111 (3 set bits, 3 is prime)
8  -> 1000 (1 set bit, 1 is not prime)
9  -> 1001 (2 set bits, 2 is prime)
10 -> 1010 (2 set bits, 2 is prime)
4 numbers have a prime number of set bits.
 */
