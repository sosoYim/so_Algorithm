function solution(n, t, m, p) {
  let answer = '';
  let order = 1; // 1~m
  const res = [];
  const nums = Array.from({ length: m * t }, (v, i) => i.toString(n));
  console.log(nums);
  // while (res.length !== t) {
  //   const curNum = nums.shift();
  //   const curNumSplited = curNum.split('');
  //   const isAlphabet = curNum >= 10 || curNum <= 15 || curNum.isNaN();
  //   if (isAlphabet) {
  //     let cnt = 0;
  //     while (cnt < 2) {
  //       order = order > m ? 1 : order + 1;
  //       if (order === p) res.push(curNum.toUpperCase);
  //     }
  //   } else {
  //     while (curNumSplited.length) {
  //       order = order > m ? 1 : order + 1;
  //       if (order === p) res.push(curNumSplited);
  //     }
  //   }
  // }

  // answer = res.join('');

  return answer;
}

console.log(solution(2, 4, 2, 1)); // 0111
console.log(solution(16, 16, 2, 1)); // 02468ACE11111111
console.log(solution(10, 16, 2, 1)); // 02468ACE11111111

function toBase(num, base) {
  let res = '';
  let make = num;
  while (make < num) {}
}
