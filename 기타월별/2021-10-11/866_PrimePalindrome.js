/**
 * 866. Prime Palindrome
 * https://leetcode.com/problems/prime-palindrome/
Given an integer n, return the smallest prime palindrome greater than or equal to n.

An integer is prime if it has exactly two divisors: 1 and itself. Note that 1 is not a prime number.

For example, 2, 3, 5, 7, 11, and 13 are all primes.
An integer is a palindrome if it reads the same from left to right as it does from right to left.

For example, 101 and 12321 are palindromes.
The test cases are generated so that the answer always exists and is in the range [2, 2 * 108].
Input: n = 6
Output: 7
 */

const isPrime = n => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return n !== 1;
};

const getPalindrome = n => {
  const res = [];
  const len = Math.floor(n / 2);
  for (let i = 10 ** (len - 1); i < 10 ** len; i++) {
    for (let j = 0; j < 10; j++) {
      res.push(+(i + '' + j + i.toString().split('').reverse().join('')));
    }
  }
  return res;
};

let primePalindrome = function (n) {
  const temp = [2, 2, 2, 3, 5, 5, 7, 7, 11, 11, 11, 11];
  if (temp[n]) return temp[n];

  let N = n.toString().length;

  while (true) {
    for (const number of getPalindrome(N)) {
      if (number >= n && isPrime(number)) return number;
    }
    N += 1;
  }
};

console.log(primePalindrome(123));
