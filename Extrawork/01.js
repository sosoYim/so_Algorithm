/*
반편성
지원 번호 1 ～ 24까지 24명의 학생을 3학급으로 편성하려고 한다. 2명의 교사가 1 ～ 24
사이의 수를 지정하면 두 수의 합을 24로 나눈 나머지(0인경우 24로 간주)값이 처음 1반에
소속될 학생번호이다. 그 학생으로부터 5번 째 학생이 2반에 소속되며 또 5번 째 학생이 3
반에 소속된다. 이러한 방법으로 3반 다음에 1반으로 연결된다. 1, 2, 3반별로 소속학생의
지원번호를 출력한다.(이미 소속된 학생은 다음 반 계산에서 제외된다)
2명의 교사가 입력하는 2개의 숫자는 입력받는다
*/

function solution(num1, num2) {
  // 건너뛸 기준(num), 반환할 3 반이 담긴 배열(result), 1~24 학생(stds), 반 수(cls)
  const num = (num1 + num2) % 24 === 0 ? 24 : (num1 + num2) % 24;
  const result = Array.from({ length: 3 }, () => []);
  let stds = Array.from({ length: 24 }, (_, i) => i + 1);
  stds = [...stds.slice(num - 1), ...stds.slice(0, num - 1)];
  let cls = 0;

  while (stds.length > 0) {
    result[cls].push(stds.shift());
    if (stds.length) {
      for (let i = 0; i < 4; i++) {
        stds.push(stds.shift());
      }
    }
    cls = cls === 2 ? 0 : (cls += 1);
  }

  for (const x of result) {
    x.sort((a, b) => a - b);
  }

  return result;
}

console.log(solution(7, 20));

/*
1반 : 2 3 7 9 11 14 16 18
2반 : 6 8 10 12 15 17 19 23
3반 : 1 4 5 13 20 21 22 24
*/
