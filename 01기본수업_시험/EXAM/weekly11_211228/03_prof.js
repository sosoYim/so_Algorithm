// 공간복잡도 체크 해야한다!
// 십억 단위인데 체크 배열 만들면 공간복잡도 에러 발생

function solution(n) {
  let nH = new Map();
  let queue = [];
  let L = 0;
  queue.push(n);
  nH.set(n, 1);
  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let x = queue.shift();
      if (x === 0) return L;
      if (!nH.has(x - 1)) {
        nH.set(x - 1, 1);
        queue.push(x - 1);
      }
      if (x % 2 === 0 && !nH.has(x / 2)) {
        nH.set(x / 2, 1);
        queue.push(x / 2);
      }
      if (x % 3 === 0 && !nH.has(x / 3)) {
        nH.set(x / 3, 1);
        queue.push(x / 3);
      }
    }
    L++;
  }
}
console.log(solution(25)); //6
console.log(solution(101)); //9
console.log(solution(10000)); //15
console.log(solution(1000001)); //21
console.log(solution(213456)); //17
console.log(solution(456789)); //21
console.log(solution(1900000000)); //30
console.log(solution(2147485)); //22
console.log(solution(17)); //6
console.log(solution(97)); //8
