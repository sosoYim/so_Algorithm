function solution(id_list, report, k) {
  let answer = [];
  let n = id_list.length;
  let reportGraph = Array.from(Array(n), () => Array(n).fill(0));
  let stoped = Array(n).fill(0);
  let sH = new Map();
  for (let i = 0; i < n; i++) {
    sH.set(id_list[i], i);
  }
  for (let i = 0; i < report.length; i++) {
    let tmp = report[i].split(' ');
    let x = sH.get(tmp[0]);
    let y = sH.get(tmp[1]);
    reportGraph[x][y] = 1;
  }
  for (let i = 0; i < n; i++) {
    let cnt = 0;
    for (let j = 0; j < n; j++) {
      if (reportGraph[j][i] === 1) cnt++;
    }
    if (cnt >= k) {
      stoped[i] = 1;
    }
  }
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (reportGraph[i][j] === 1 && stoped[j] === 1) {
        count++;
      }
    }
    answer.push(count);
  }

  return answer;
}
console.log(
  solution(
    ['aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg', 'hh', 'ii', 'jj', 'kk'],
    [
      'aa bb',
      'aa cc',
      'aa dd',
      'aa ee',
      'aa ff',
      'aa gg',
      'aa hh',
      'aa ii',
      'aa jj',
      'aa kk',
      'bb aa',
      'bb cc',
      'bb dd',
      'bb ee',
      'bb ff',
      'bb gg',
      'bb hh',
      'bb ii',
      'bb jj',
      'bb kk',
    ],
    2
  )
); //[9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0]

console.log(
  solution(
    ['aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg', 'hh'],
    [
      'aa bb',
      'aa cc',
      'aa dd',
      'aa ee',
      'aa ff',
      'aa gg',
      'aa hh',
      'bb aa',
      'bb cc',
      'bb dd',
      'bb ee',
      'bb ff',
      'bb gg',
      'bb hh',
      'cc aa',
      'cc bb',
      'cc dd',
      'cc ee',
      'cc ff',
      'cc gg',
      'cc hh',
      'dd aa',
      'dd bb',
      'dd cc',
      'dd ee',
      'dd ff',
      'dd gg',
      'dd hh',
      'ee aa',
      'ee bb',
      'ee cc',
      'ee dd',
      'ee ff',
      'ee gg',
      'ee hh',
      'ff aa',
      'ff bb',
      'ff cc',
      'ff dd',
      'ff ee',
      'ff gg',
      'ff hh',
      'gg aa',
      'gg bb',
      'gg cc',
      'gg dd',
      'gg ee',
      'gg ff',
      'gg hh',
      'hh aa',
      'hh bb',
      'hh cc',
      'hh dd',
      'hh ee',
      'hh ff',
      'hh gg',
    ],
    7
  )
); //[7, 7, 7, 7, 7, 7, 7, 7]
