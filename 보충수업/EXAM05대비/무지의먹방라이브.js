// https://programmers.co.kr/learn/courses/30/lessons/42891
// TODO: 완변한 것 같은데 정확도가 와장창 깨짐.... 뭐가 문제지

function solution(food_times, k) {
  food_times.unshift(0);
  const sorted = [...food_times].sort((a, b) => a - b);
  let rest = food_times.length - 1;
  for (let i = 1; i < sorted.length; i++) {
    if (k < rest * (sorted[i] - sorted[i - 1])) {
      const idx = k % rest;
      let cnt = 0;
      for (let j = 1; j < food_times.length; j++) {
        if (food_times[j] >= food_times[i]) {
          if (cnt === idx) return j;
          cnt += 1;
        }
      }
    } else {
      k -= rest * (sorted[i] - sorted[i - 1]);
      rest--;
    }
  }
  return -1;
}

// console.log(solution([3, 1, 2], 5)); // 1
console.log(solution([3, 1, 2], 0)); // 1
console.log(solution([2, 2, 2], 4)); // 2
