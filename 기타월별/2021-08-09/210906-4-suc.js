//https://programmers.co.kr/learn/courses/30/lessons/72411
//[성공] 메뉴 리뉴얼

//condition 객체에
//cnt : 탐색할 총 갯수
//smap : 탐색중인 조합의 map
//course : 탐색 배열
'use strict';

function solution(orders, course) {
  function DFS(L, tmp, s, condition) {
    //조합 갯수와 조합의 길이가 같다면
    if (L === condition.cnt) {
      //이미 등록된 조합이면 +1, 아니면 1
      tmp = tmp.split('').sort().join('');
      condition.smap.set(tmp, condition.smap.get(tmp) ? condition.smap.get(tmp) + 1 : 1);
    } else {
      for (let i = s; i < condition.course.length; i++) {
        DFS(L + 1, tmp + condition.course[i], i + 1, condition);
      }
    }
  }
  let answer = [];
  for (let x of course) {
    // 조합의 갯수 조건마다
    // 해당 조합의 map
    let combiMap = new Map();

    for (let order of orders) {
      //손님들의 메뉴 탐색
      const condition = {
        cnt: x,
        smap: combiMap,
        course: order,
      };
      //찾는 조합 수 보다 배열이 적으면 패스
      if (order.length < x) continue;

      DFS(0, '', 0, condition);
    }
    //값이 큰 수대로 정렬 -> 첫 번째 값=최대값
    if (combiMap.size === 0) continue;
    let max = [...combiMap.entries()].reduce((a, b) => (a[1] > b[1] ? a : b))[1];
    for (let [key, val] of combiMap) {
      if (max > 1 && val === max) answer.push(key);
    }
  }

  //answer 정렬
  answer = answer.sort();

  return answer;
}

console.log(solution(['XYZ', 'XWY', 'WXA'], [2, 3, 4]));
