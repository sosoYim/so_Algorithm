function solution(id_list, report, k) {
  const sMap = new Map();
  const len = id_list.length;
  const reports = report.map(v => v.split(' '));
  const singos = Array.from({ length: len }, () => Array(len).fill(0));
  const ch = Array(len).fill(0);
  const result = [];
  // 사람 : idx
  for (let i = 0; i < id_list.length; i++) {
    sMap.set(id_list[i], i);
  }

  // 신고하는사람과 당하는 사람 관계
  for (let [ham, dangham] of reports) {
    const hamIdx = sMap.get(ham);
    const danghamIdx = sMap.get(dangham);
    singos[hamIdx][danghamIdx] = 1;
  }
  // console.log(singos);

  // 신고당한 사람 몇번 신고 당했는지 체크
  for (let i = 0; i < len; i++) {
    let cnt = 0;
    for (let j = 0; j < len; j++) {
      if (singos[j][i] === 1) cnt += 1;
    }
    ch[i] = cnt;
  }

  // 신고한 사람마다 누굴 신고했는지 확인
  // 신고당한 사람이 정지 먹었나 체크
  for (let i = 0; i < len; i++) {
    let mails = 0;
    for (let j = 0; j < len; j++) {
      if (singos[i][j] === 1 && ch[j] >= k) mails += 1;
    }
    result.push(mails);
  }
  return result;
}

const id_list = ['muzi', 'frodo', 'apeach', 'neo'];
const report = ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'];
const k = 2;
console.log(solution(id_list, report, k));
