function solution(id_list, report, k) {
  const result = [];
  const users = new Map();
  for (let i = 0; i < id_list.length; i++) {
    users.set(id_list[i], i);
  }

  const relations = Array.from({ length: id_list.length }, () => Array(id_list.length).fill(0));
  const ch = Array(id_list.length).fill(0);

  const reports = report.map(v => v.split(' '));
  reports.forEach(([ham, dangham]) => {
    const hamIdx = users.get(ham);
    const danghamIdx = users.get(dangham);
    relations[hamIdx][danghamIdx] = 1;
  });

  // console.log(relations);
  for (let i = 0; i < id_list.length; i++) {
    let cnt = 0;
    for (let j = 0; j < id_list.length; j++) {
      // console.log(relations[j][i]);
      if (relations[j][i] !== 0) cnt += 1;
    }
    if (cnt >= k) ch[i] = 1;
  }
  for (let i = 0; i < id_list.length; i++) {
    let cnt = 0;
    for (let j = 0; j < id_list.length; j++) {
      if (relations[i][j] !== 0 && ch[j] !== 0) cnt += 1;
    }
    result.push(cnt);
  }
  return result;
}

const id_list = ['muzi', 'frodo', 'apeach', 'neo'];
const report = ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'];
console.log(solution(id_list, report, 2));

// const id_list = ['con', 'ryan'];
// const report = ['ryan con', 'ryan con', 'ryan con', 'ryan con'];

// const id_list = ['yohan', 'mary', 'jeremy'];
// const report = [
//   'yohan jeremy',
//   'yohan jeremy',
//   'mary yohan',
//   'jeremy mary',
//   'yohan jeremy',
//   'yohan mary',
// ];
// console.log(solution(id_list, report, 2));
