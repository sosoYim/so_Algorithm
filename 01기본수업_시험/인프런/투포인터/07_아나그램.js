function solution(s1, s2) {
  const sMap = new Map();
  for (let x of s1) {
    sMap.set(x, (sMap.get(x) || 0) + 1);
  }
  for (let x of s2) {
    if (!sMap.has(x)) return 'NO';
    sMap.get(x) === 1 ? sMap.delete(x) : sMap.set(x, sMap.get(x) - 1);
  }
  if (sMap.size > 0) return 'NO';
  else return 'YES';
}

console.log(solution('AbaAeCe', 'baeeACA'));
console.log(solution('abaCC', 'Caaab'));
