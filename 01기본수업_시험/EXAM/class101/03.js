function solution(A) {
  const nH = new Map();
  let answer = -1;
  A.sort((a, b) => b - a);
  for (let x of A) {
    const sum = (x + '').split('').reduce((acc, v) => acc + +v, 0);
    // if (nH.has(sum)) return nH.get(sum) + x;
    if (nH.has(sum)) {
      answer = Math.max(answer, nH.get(sum) + x);
    } else nH.set(sum, x);
  }
  return answer;
}

console.log(solution([51, 71, 17, 42]));

/**
 * Given an array A consisting of N integers, returns the maximum sum of two numbers
 * whose digits add up to an equal sum. If there are no two numbers whose digits have an equal sum,
 * the function should return 01.
 *
 * EX)
 * A=[51,71,17,42] returns 93.
 * There are two pairs of numbers whose digits add up to an equal sum: (51,42) and (17,71). The forst pair sums up to 93.
 */
