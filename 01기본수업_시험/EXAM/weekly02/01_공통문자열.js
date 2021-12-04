/*
공통 문자열
N개의 문자열이 주어지면 이 문자열들의 최대 공통 접두사를 출력하는 프로그램을 작성하세
요. 만약 문자열들이 [“long", "longtime", "longest"] 라면 세 단어의 최대 공통 접두사는 
”long"입니다.
 
▣ 입력설명
매개변수 s배열에 N(3<=N<=30)개의 단어가 입력됩니다. 각 단어의 길이는 100을 넘지 않는다.
모든 문자열은 모두 소문자로 입력됩니다.
▣ 출력설명
최대 공통 접두사를 반환하세요. 반드시 공통접두사는 존재합니다.
▣ 매개변수 형식 
[“long”, “longtime”, “longest”]
▣ 반환값 형식
long
 */

function solution(strs) {
  strs.sort((a, b) => a.length - b.length);

  for (let i = 0; i < strs[0].length; i++) {
    const letters = new Set();
    letters.add(strs[0][i]);
    for (let j = 1; j < strs.length; j++) {
      letters.add(strs[j][i]);
      if (letters.size !== 1) {
        console.log(i, strs[0][i]);
        return strs[0].slice(0, i);
      }
    }
  }
  return strs[0];
}

// function solution(strs) {
//   let answer = '';
//   let len = Number.MAX_SAFE_INTEGER;
//   strs.forEach(x => {
//     len = Math.min(len, x.length);
//   });
//   for (let i = 0; i < len; i++) {
//     let s = new Set();
//     strs.forEach(x => {
//       s.add(x[i]);
//     });
//     if (s.size === 1) answer += strs[0][i];
//   }
//   return answer;
// }

console.log(solution(['long', 'longtime', 'longest']));
