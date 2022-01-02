function solution(buildings) {
  let max = 0;
  const result = [];
  for (let i = buildings.length - 1; i >= 0; i--) {
    if (buildings[i] > max) {
      result.unshift(i);
      max = buildings[i];
    }
  }
  return result;
}

console.log(solution([4, 2, 3, 1]));
// 0 2 3
// 오른쪽에 있는 바다를 볼 수 있는 빌딜들의 인덱스를 오름차순으로 반환하라.
// 빌딩의 높이를 준다.
