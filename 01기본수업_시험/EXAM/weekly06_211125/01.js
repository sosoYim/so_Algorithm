function solution(n, primes) {
  const uglyNums = [1];
  const checkIndex = Array(primes.length).fill(0);
  for (let i = 1; i <= n; i++) {
    let min = Number.MAX_SAFE_INTEGER;
    for (let j = 0; j < primes.length; j++) {
      min = Math.min(min, uglyNums[checkIndex[j]] * primes[j]);
    }
    // console.log(i, min);
    uglyNums.push(min);
    // console.log('ugly', uglyNums);
    for (let j = 0; j < primes.length; j++) {
      if (min % primes[j] === 0) {
        checkIndex[j] += 1;
        // console.log(checkIndex[j]);
      }
    }
  }
  // console.log(uglyNums);
  return uglyNums[n - 1];
}

console.log(solution(12, [2, 7, 13, 19]));
