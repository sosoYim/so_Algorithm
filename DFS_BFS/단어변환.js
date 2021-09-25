// https://programmers.co.kr/learn/courses/30/lessons/43163
// 단어변환 lv3 프로그래머스
// 성공
// 참고 코드 : https://www.notion.so/Word-Ladder-ceeedbc83d6b4860ac17294846241961

function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  const q = []; // [비교 후보 단어,레벨] 이 들어갈 큐
  const visit = new Map(); // 비교 후보에 들어간 단어

  // begin 으로 초기 세팅
  q.push([begin, 0]);
  visit.set(begin, 1);

  // 더이상 비교할 단어가 없을 때까지
  // 기준 비교 단어(shift)와 글자가 1개 다르고 방문한적 없는 단어
  // 비교 후보 q 에 넣기
  while (q.length) {
    const [word, lev] = q.shift();
    // console.log(`${word} : ${lev}`);
    if (word === target) {
      return lev; //타겟 단어 발견시 레벨 return
    }
    for (const x of words) {
      if (visit.get(x) !== undefined) continue;
      let cnt = 0;
      for (let i = 0; i < x.length; i++) {
        if (x[i] !== word[i]) cnt += 1;
      }
      if (cnt === 1) {
        q.push([x, lev + 1]);
        visit.set(x, 1);
      }
    }
  }

  // 타겟 단어 발견 실패. return 0
  return 0;
}

// console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']));
console.log(solution('hit', 'cog', ['cog', 'log', 'lot', 'dog', 'dot', 'hot']));
