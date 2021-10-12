// 통과! [보석쇼핑]
// https://programmers.co.kr/learn/courses/30/lessons/67258

function solution(gems) {
  let answer = [];
  const gemsLength = new Set(gems).size;
  const sMap = new Map();
  let lt = 0;
  // 최소값이 될 수 있는 가장 큰 값
  let minLength = gems.length;

  for (let rt = 0; rt < gems.length; rt++) {
    // gems[rt]값 sMap에 카운트
    sMap.set(gems[rt], (sMap.get(gems[rt]) || 0) + 1);

    // gens[lt]의 키값이 2 이상이라면 gems[lt] -1, lt += 1
    while (sMap.get(gems[lt]) > 1) {
      sMap.set(gems[lt], sMap.get(gems[lt]) - 1);
      // 0이면 지우기
      if (sMap.get(gems[lt]) === 0) sMap.delete(gems[lt]);
      lt += 1;
    }

    // 정답 후보: sMap의 길이가 보석의 종류와 같고, minLenght보다 새로운 정답 후보길이가 짧다.
    if (sMap.size === gemsLength && minLength > rt - lt) {
      answer = [lt + 1, rt + 1];
      minLength = rt - lt;
    }
  }

  // 연속부분수열이 모든 보석을 포함하는 가장 짧고 처음 범위 [s,f]
  return minLength === gems.length ? [1, gems.length] : answer;
}

// console.log(solution(['AA', 'AB', 'AC', 'AD', 'AF']));
console.log(solution(['A', 'A', 'B'])); // [2,3]
