function solution(arr) {
  var answer = 0;
  const min = [];
  for (let lt = 0; lt < arr.length; lt++) {
    console.log(lt, 'start');
    for (let rt = lt; rt < arr.length; rt++) {
      while (min[0] > arr[rt]) {
        min.pop();
      }
      min.push(arr[rt]);
      answer += min[0];
      console.log(rt, min);
    }
    if (min[0] === arr[lt]) min.shift();
  }
  return answer;
}

console.log(solution([3, 1, 2, 4]));
