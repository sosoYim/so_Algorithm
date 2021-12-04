// 오름차 정렬된 두 배열 합치기

function solution(n, arrN, m, arrM) {
  let result = [];
  let lt = 0;
  let rt = 0;
  while (lt < n && rt < m) {
    // 배열 중 하나라도 다 들어가면 종료
    const elN = arrN[lt];
    const elM = arrM[rt];
    if (elN < elM) {
      result.push(elN);
      lt++;
    } else {
      result.push(elM);
      rt++;
    }
  }

  lt === n
    ? result.push(...arrM.slice(rt, arrM.length))
    : result.push(...arrN.slice(lt, arrN.length));

  return result;
}

console.log(solution(3, [1, 3, 5], 5, [2, 3, 6, 7, 9]));
