/**
 * 오픈채팅방
 * https://programmers.co.kr/learn/courses/30/lessons/42888?language=javascript
 * ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]
 */

function solution(record) {
  const result = [];
  // 최종 상태 id, name
  const sMap = new Map();
  record = [...record].map(v => v.split(' '));
  record.forEach(([state, id, username]) => {
    if (state === 'Enter' || state === 'Change') sMap.set(id, username);
  });

  const msg = (state, username) => {
    if (state === 'Enter') result.push(`${username}님이 들어왔습니다.`);
    else if (state === 'Leave') result.push(`${username}님이 나갔습니다.`);
  };
  record.forEach(([state, id]) => msg(state, sMap.get(id)));
  return result;
}

const record = [
  'Enter uid1234 Muzi',
  'Enter uid4567 Prodo',
  'Leave uid1234',
  'Enter uid1234 Prodo',
  'Change uid4567 Ryan',
];
console.log(solution(record));
