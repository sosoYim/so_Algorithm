/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
// var nthSuperUglyNumber = function (n, primes) {
//   const dy = [1];
//   const ptr = Array(primes.length).fill(0); // result의 어디 인덱스인가

//   for (let i = 1; i < n; i++) {
//     let min = Number.MAX_SAFE_INTEGER;
//     for (let j = 0; j < primes.length; j++) {
//       min = Math.min(min, primes[j] * dy[ptr[j]]);
//     }
//     dy[i] = min;
//     // result.push(min);
//     for (let j = 0; j < primes.length; j++) {
//       if (min % primes[j] === 0) ptr[j] += 1;
//     }
//   }

//   return dy[n - 1];
// };

var nthSuperUglyNumber = function (n, primes) {
  const dy = [1];
  const ptr = Array(primes.length).fill(0);
  for (let i = 1; i < n; i++) {
    let min = Number.MAX_SAFE_INTEGER;
    for (let j = 0; j < primes.length; j++) {
      min = Math.min(min, dy[ptr[j]] * primes[j]);
    }
    dy[i] = min;
    for (let j = 0; j < primes.length; j++) {
      if (min % primes[j] === 0) ptr[j] += 1;
    }
  }
  return dy[n - 1];
};

console.log(nthSuperUglyNumber(12, [2, 7, 13, 19])); // 32
