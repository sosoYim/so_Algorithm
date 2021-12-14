//최소 길이 접두어

function solution(words) {
  let answer, i;
  let sh = new Map();
  for (i = 0; i < words[0].length; i++) {
    let flag = true;
    for (let j = 0; j < words.length; j++) {
      let x = words[j].substring(0, i + 1);
      console.log(x);
      if (sh.has(x)) {
        //이미 등록된 접두어
        flag = false;
        break;
      }
      sh.set(x, 1);
    }
    if (flag) break;
  }
  answer = i + 1;
  return answer;
}

console.log(solution(['longlong', 'longtong', 'longbig']));
