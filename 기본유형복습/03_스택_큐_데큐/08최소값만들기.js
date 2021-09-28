// 최소값 만들기
// 자연수 N이 주어지면 N의 각 자릿수 중 K개를 지워 최솟값을 만드는 프로그램을 작성해라
// N = 2322113, K = 3이면 => 2113
// 제일 앞자리의 0은 자릿수로 인정하지 않는다.

function solution(num, k) {
  const stack = [];
  num = String(num);
  for (let i = 0; i < num.length; i++) {
    while (stack.length > 0 && k > 0 && stack[stack.length - 1] > num[i]) {
      stack.pop();
      k--;
    }
    stack.push(num[i]);
  }
  return stack.join('');
}

console.log(solution(2322113, 3)); //2113
// console.log(solution(200200, 1)); //200
// console.log(solution(123, 3)); //0
// console.log(solution(23000, 2)); //0
// console.log(solution(23000, 1)); //2000
// console.log(solution(625437, 2)); //2437
// console.log(solution(625437, 3)); //237
// console.log(solution(625437, 4)); //23
// console.log(solution(625437, 5)); //2
// console.log(solution(625437, 6)); //0
// console.log(solution(654321, 3)); //321
// console.log(solution(2322113, 4)); //113
// console.log(solution(2322113, 5)); //11
// console.log(solution(2322113, 1)); //222113
