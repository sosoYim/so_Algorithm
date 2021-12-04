// A,B 두 집합의 공통 원소를 추출하여 오름차순으로 출력

function solution(N, arrA, M, arrB) {
  const result = [];
  arrA.sort((a, b) => a - b);
  arrB.sort((a, b) => a - b);
  let p1 = 0;
  let p2 = 0;

  while (p1 < N && p2 < M) {
    if (arrA[p1] === arrB[p2]) {
      result.push(arrA[p1]);
      p1++;
      p2++;
    } else if (arrA[p1] < arrB[p2]) {
      p1++;
    } else {
      p2++;
    }
  }

  return result;
}

console.log(solution(5, [1, 3, 9, 5, 2], 5, [3, 2, 5, 7, 8])); // 2 3 5
