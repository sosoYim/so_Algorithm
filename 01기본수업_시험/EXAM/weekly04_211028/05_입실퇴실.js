function solution(enter, leave) {
  const result = Array(enter.length).fill(0);
  const sMap = new Map();
  // 사람 : [입장, 퇴실]
  for (let i = 0; i < enter.length; i++) {
    sMap.set(enter[i], [i]);
  }
  for (let i = 0; i < enter.length; i++) {
    sMap.set(leave[i], [...sMap.get(leave[i]), i]);
  }
  // console.log(sMap);
  for (let i = 0; i < enter.length; i++) {
    // 들어온 순서 : i 인 enter[i]와 반드시 만난 사람 수 찾는 중
    const exitIdx = sMap.get(enter[i])[1];
    let cnt = 0;
    // enter[i]보다 늦게 입장하고 퇴장은 더 빨리한 사람 || enter[i]보다 입장을 더 일찍했는데 퇴장을 늦게한 사람
    for (let j = 0; j < enter.length; j++) {
      if (j === i) continue; // 자기 자신은 비교하지 않기
      if ((i < j && exitIdx > sMap.get(enter[j])[1]) || (j < i && exitIdx < sMap.get(enter[j])[1]))
        cnt++;
    }
    result[i] = cnt;
  }
  return result;
}

// console.log(solution([1, 3, 2], [1, 2, 3]));
console.log(solution([1, 4, 2, 3], [2, 1, 3, 4]));
