function solution(id_list, report, k) {
  const result = Array(id_list.length).fill(0);
  const sMap = new Map();
  id_list.forEach((v, i) => {
    sMap.set(v, i);
  });

  const reports = report.map(v => v.split(' '));
  const board = Array.from({ length: id_list.length }, () => Array(id_list.length).fill(0));

  reports.forEach(([to, got]) => {
    board[sMap.get(to)][sMap.get(got)] = 1;
  });

  const ch = Array(id_list.length).fill(0);
  for (let y = 0; y < id_list.length; y++) {
    let cnt = 0;
    for (let x = 0; x < id_list.length; x++) {
      if (board[x][y] === 1) cnt += 1;
    }
    if (cnt >= k) ch[y] = 1;
  }

  for (let i = 0; i < id_list.length; i++) {
    let cnt = 0;
    for (let j = 0; j < id_list.length; j++) {
      if (board[i][j] !== 0 && ch[j] !== 0) cnt += 1;
    }
    result[i] = cnt;
  }

  return result;
}

// const id_list = ['muzi', 'frodo', 'apeach', 'neo'];
// const report = ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'];
// console.log(solution(id_list, report, 2));

// const id_list = ['con', 'ryan'];
// const report = ['ryan con', 'ryan con', 'ryan con', 'ryan con'];
// console.log(solution(id_list, report, 3));

const id_list = ['yohan', 'mary', 'jeremy'];
const report = [
  'yohan jeremy',
  'yohan jeremy',
  'mary yohan',
  'jeremy mary',
  'yohan jeremy',
  'yohan mary',
];
console.log(solution(id_list, report, 2));
