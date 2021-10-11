// https://programmers.co.kr/learn/courses/30/lessons/42839

function solution(numbers) {
  let answer = 0;
  let part = [];
  const subset = [];
  const numbersArr = numbers.split('');
  const ch = Array(numbersArr.length).fill(0);
  console.log('numbersArr', numbersArr);

  function DFS(L, limit) {
    if (L === limit) {
      if (part.length) subset.push([...part]);
    } else {
      for (let i = 0; i < numbersArr.length; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          part.push(numbersArr[i]);
          DFS(L + 1, limit);
          part.pop();
        }
      }
    }
  }

  DFS(0, part.length);
  console.log(subset);

  return answer;
}

console.log(solution('17'));
// console.log(solution('011'));

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    // console.log(i);
    if (n % i === 0) return false;
  }
  return true;
}

// console.log(isPrime(71));
