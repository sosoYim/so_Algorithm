function solution(s, t) {
  let lt = 0;
  let answer = 0;
  const tH = new Map();
  const sH = new Map();

  function compareMap(m1, m2) {
    if (m1.size !== m2.size) return false;
    for (const [key, value] of m1) {
      if (m2.get(key) !== value) return false;
    }
    return true;
  }

  for (let x of t) {
    tH.set(x, (tH.get(x) || 0) + 1);
  }
  for (let i = 0; i < t.length - 1; i++) {
    sH.set(s[i], (sH.get(s[i]) || 0) + 1);
  }
  for (let rt = t.length - 1; rt < s.length; rt++) {
    sH.set(s[rt], (sH.get(s[rt]) || 0) + 1);
    if (compareMap(sH, tH)) answer += 1;
    sH.get(s[lt]) === 1 ? sH.delete(s[lt]) : sH.set(s[lt], sH.get(s[lt]) - 1);
    lt += 1;
  }
  return answer;
}

console.log(solution('bacaAacba', 'abc'));
/* 
모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)
S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하
세요. 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.
▣ 입력설명
매개변수 s에 S문자열이 입력되고, 매개변수 t에 T문자열이 입력됩니다. 
S문자열의 길이는 10,000을 넘지 않으며, T문자열은 S문자열보다 길이가 작거나 같습니다.
▣ 출력설명
S단어에 T문자열과 아나그램이 되는 부분문자열의 개수를 반환합니다.
▣ 매개변수 형식 1
bacacbcba, abc
▣ 반환값 형식 1
3
출력설명: {bac}, {acb}, {cba} 3개의 부분문자열이 "abc"문자열과 아나그램입니다.
▣ 매개변수 형식 2
bacaAacba, abc
▣ 반환값 형식 2
3
*/
