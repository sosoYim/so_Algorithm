// largest unique number

function solution(arr) {
  let result = 0;
  const nH = new Map();
  for (let x of arr) {
    nH.set(x, (nH.get(x) || 0) + 1);
  }
  console.log(nH);
  for (let [key, val] of nH) {
    if (val === 1) result = Math.max(result, key);
  }
  return result;
}

console.log(solution([5, 7, 3, 9, 4, 9, 8, 3, 1]));
