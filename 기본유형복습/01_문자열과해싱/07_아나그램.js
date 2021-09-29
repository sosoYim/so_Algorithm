// 두 단어가 아나그램인지 구분하시오
// Map으로 글자의 개수를 세어서 비교

function solution(str1, str2) {
  if (str1.length !== str2.length) return false;
  const nH = new Map();
  for (const x of str1) {
    nH.set(x, (nH.get(x) || 0) + 1);
  }
  for (const x of str2) {
    if (!nH.get(x)) return false;
    else nH.set(x, nH.get(x) - 1);
  }
  return true;
}

console.log(solution('aba', 'bbad'));
