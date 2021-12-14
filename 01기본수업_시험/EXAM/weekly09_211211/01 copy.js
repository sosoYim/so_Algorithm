function solution(arr) {
  var answer = 0;

  for (let lt = 0; lt < arr.length; lt++) {
    for (let rt = lt; rt < arr.length; rt++) {
      answer += Math.min(...arr.slice(lt, rt + 1));
    }
  }

  // console.log(min);
  return answer;
}

console.log(solution([3, 1, 2, 4]));
