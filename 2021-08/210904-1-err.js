//신규아이디 추천 - 프로그래머스
//https://programmers.co.kr/learn/courses/30/lessons/72410
//[실패]

function solution(new_id) {
  let answer = '';
  let stack = [];
  new_id = new_id.toLowerCase();

  function checkEngNum(str) {
    const regExp = /[a-z0-9]/g;
    if (regExp.test(str) || str === '-' || str === '_' || str === '.') {
      return true;
    } else {
      return false;
    }
  }

  for (let i = 0; i < new_id.length; i++) {
    let x = new_id[i];

    if (!checkEngNum(x)) {
      continue;
    }
    //
    if (stack.length > 0 && x === '.') {
      let last = stack.pop();
      console.log(`last : ${last}`);
      if (last !== '.') stack.push(last);
    }
    if (x === ' ') {
      x = 'a';
    }

    stack.push(x);
  }

  while (stack.length > 15) {
    let check = stack.pop();
  }
  let len = stack.length - 1;
  if (stack[len] === '.') {
    while (stack[len] === '.') {
      stack.pop();
      len--;
    }
  }

  if (stack[0] === '.') {
    stack.shift();
  }

  if (stack.length <= 2) {
    let flag = true;
    if (stack.length === 0) stack.push('a');
    let lastLetter = stack.pop();
    while (flag) {
      stack.push(lastLetter);
      if (stack.length > 2) flag = false;
    }
  }

  answer = stack.join('');
  return answer;
}

console.log(solution('...!@BaT#*..y.abcdefghijklm'));
