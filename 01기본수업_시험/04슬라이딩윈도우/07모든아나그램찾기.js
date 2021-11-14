// 7. 모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)
// S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하 세요.
// 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.

// ▣ 입력설명
// 매개변수 s에 S문자열이 입력되고, 매개변수 t에 T문자열이 입력됩니다.
// S문자열의 길이는 10,000을 넘지 않으며, T문자열은 S문자열보다 길이가 작거나 같습니다.
// ▣ 출력설명
// S단어에 T문자열과 아나그램이 되는 부분문자열의 개수를 반환합니다.
// ▣ 매개변수 형식 1
// bacacbcba, abc
// ▣ 반환값 형식 1
// 3
// 출력설명: {bac}, {acb}, {cba} 3개의 부분문자열이 "abc"문자열과 아나그램입니다.
// ▣ 매개변수 형식 2
// bacaAacba, abc
// ▣ 반환값 형식 2
// 3

function solution(s, t) {
  let answer = 0;
  let sH = new Map();
  let lt = 0;

  // t 조건의 문자를 키로, (문자 갯수 * -1)를 값으로 저장.
  for (let x of t) {
    sH.set(x, sH.get(x) - 1 || -1);
  }
  // (t 조건의 길이 -1) 만큼, s문자의 초기값을 설정함.
  let len = t.length - 1;
  for (let i = 0; i < len; i++) {
    // -1이라는건, 현재 문자를 카운트하면 만족한다는 것.
    if (sH.get(s[i]) === -1) sH.delete(s[i]);
    // -1이 아니라는건, 현재 문자를 1카운트 해도 만족하지 않음.
    else sH.set(s[i], sH.get(s[i]) + 1 || 1);
  }
  // (t 조건의 길이)부터, s문자열의 끝까지
  for (let rt = len; rt < s.length; rt++) {
    if (sH.get(s[rt]) === -1) sH.delete(s[rt]);
    else sH.set(s[rt], sH.get(s[rt]) + 1 || 1);

    // 만약 sH의 size가 0이라는건, 현재 문자를 기준으로 아나그램을 만족했음
    if (sH.size === 0) answer++;
    // 이제 lt의 문자 하나를 제거할 차례...
    if (sH.get(s[lt]) === 1) sH.delete(s[lt]);
    else sH.set(s[lt], sH.get(s[lt]) - 1 || -1);
    lt++;
  }
  return answer;
}
//  console.log(solution("bAcacbcba", "abc")); // 2 => 대소문자 구별!!
// console.log(solution("bacacbcba", "abc")); // 3
// console.log(solution("bacaAacba", "abc")); // 3
// console.log(solution("bacddacba", "abc")); // 3
//console.log(solution("bacacbcba", "aabc")); // 1
