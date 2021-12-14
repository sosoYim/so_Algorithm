function solution(nums, k) {
  var answer = 0;
  nums.sort((a, b) => a - b);

  const uniques = new Set(nums);
  const nMap = new Map();
  for (let x of uniques) {
    nMap.set(x, nums.filter(v => v === x).length);
  }
  // console.log(nMap);

  // 0 인 경우
  if (k === 0) {
    for (const [key, val] of nMap) {
      if (val >= 2) answer += 1;
      // else if (val > 2) answer += val;
    }
    return answer;
  }

  const uniquesArr = [...uniques];
  // console.log(uniquesArr);

  // 0이 아닌 경우
  for (let lt = 0; lt < uniquesArr.length - 1; lt++) {
    // lt 와 k 차이나는 수 찾기
    let rt = lt + 1;
    // console.log(lt, rt, '시작');
    let cnt = 0;
    while (uniquesArr[rt] - uniquesArr[lt] < k && rt < uniquesArr.length) rt += 1;
    // console.log(`rt 이동 후 ${rt} : ${uniquesArr[rt]}`);
    if (uniquesArr[rt] - uniquesArr[lt] === k) {
      // answer += nMap.get(uniquesArr[rt]);
      answer += 1;
      // console.log(`[rt] - [lt] ===k, 추가 후 answer ${answer}`);
    }
  }

  return answer;
}

// console.log(solution([1, 3, 1, 5, 4], 0)); // 1
// console.log(solution([3, 1, 4, 1, 5], 2)); // 2
console.log(solution([1, 2, 4, 4, 3, 3, 0, 9, 2, 3], 3)); // 2
