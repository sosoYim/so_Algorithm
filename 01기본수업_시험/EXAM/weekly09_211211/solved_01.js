function solution(arr) {
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    const min = []; // arr[i]를 포함하는 최소값 오름차순
    for (let j = i; j < arr.length; j++) {
      while (min[min.length - 1] > arr[j]) {
        min.shift();
      }
      min.push(arr[j]);
      answer += min[0];
    }
  }

  return answer;
}

console.log(solution([3, 1, 2, 4]));
// console.log(solution([3, 4, 2]));
