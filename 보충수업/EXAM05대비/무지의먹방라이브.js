// https://programmers.co.kr/learn/courses/30/lessons/42891

function solution(food_times, k) {
  const sorted = []; // [val, pos]

  for (let i = 0; i < food_times.length; i++) {
    sorted.push([food_times[i], i + 1]);
  }
  sorted.sort((a, b) => a[0] - b[0]);

  // while(sorted.length && rest > 0){

  //   const sortedLen = sorted.length;
  //   const [val, pos] = sorted.shift();
  //   while(rest > sortedLen){

  //   }
  //   if(rest < sortedLen){
  //     return sorted[rest-1][1];
  //   }
  // }
}

console.log(solution([3, 1, 2], 5)); // 1
