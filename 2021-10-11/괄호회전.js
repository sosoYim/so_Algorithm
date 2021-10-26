/*
다음 규칙을 지키는 문자열을 올바른 괄호 문자열이라고 정의합니다.

(), [], {} 는 모두 올바른 괄호 문자열입니다.
만약 A가 올바른 괄호 문자열이라면, (A), [A], {A} 도 올바른 괄호 문자열입니다. 예를 들어, [] 가 올바른 괄호 문자열이므로, ([]) 도 올바른 괄호 문자열입니다.
만약 A, B가 올바른 괄호 문자열이라면, AB 도 올바른 괄호 문자열입니다. 예를 들어, {} 와 ([]) 가 올바른 괄호 문자열이므로, {}([]) 도 올바른 괄호 문자열입니다.
대괄호, 중괄호, 그리고 소괄호로 이루어진 문자열 s가 매개변수로 주어집니다. 이 s를 왼쪽으로 x (0 ≤ x < (s의 길이)) 칸만큼 회전시켰을 때 s가 올바른 괄호 문자열이 되게 하는 x의 개수를 return 하도록 solution 함수를 완성해주세요.
s의 길이는 1 이상 1,000 이하입니다.
"}]()[{" // 2
*/

function solution(s) {
  if (s.length % 2 === 1) return 0;
  let answer = 0;
  let sCopied = s.split('');
  // 괄호체크

  const isvalid = sArr => {
    const arrMap = new Map();
    for (let x of ['{', '[', '(']) {
      arrMap.set(x, 0);
    }
    console.log(arrMap, 'start');

    for (let x of sArr) {
      let addVal = ['{', '[', '('].includes(x) ? 1 : -1;
      let setX = ['{', '}'].includes(x) ? '{' : ['[', ']'].includes(x) ? '[' : '(';
      arrMap.set(setX, (arrMap.get(setX) || 0) + addVal);
      console.log(arrMap, 'ing', x);
      if (arrMap.get(setX) < 0) return false;
    }

    return [...arrMap.values()].some(e => e === 0);
  };

  for (let i = 0; i < s.length; i++) {
    // console.log(sCopied);
    if (isvalid(sCopied)) answer += 1;
    sCopied.push(sCopied.shift());
  }
  return answer;
}

// console.log(solution('}]()[{'));
console.log(solution('({[}])'));
