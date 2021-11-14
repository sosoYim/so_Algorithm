/**
 * https://programmers.co.kr/learn/courses/30/lessons/42577
 * 전화번호 목록
 * phone_book	return
["119", "97674223", "1195524421"]	false
["123","456","789"]	true
["12","123","1235","567","88"]	false
 */
function solution(phone_book) {
  const sMap = new Map();
  for (let x of phone_book) {
    sMap.set(x, 0);
  }
  // console.log(sMap);

  for (let [head, _] of sMap) {
    const cut = head.length;
    for (let x of phone_book) {
      if (x.length < cut) continue;
      const compHead = x.substring(0, cut);
      if (compHead === head) sMap.set(compHead, sMap.get(compHead) + 1);
      if (sMap.get(compHead) > 1) return false;
    }
  }
  return true;
}

console.log(solution(['119', '97674223', '1195524421']));
// console.log(solution(['123', '456', '789']));
