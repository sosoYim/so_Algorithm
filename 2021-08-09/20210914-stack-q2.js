//공주 구하기
function solution(n, k) {
  let answer = 0;

  let princes = new Array(n).fill(0);
  princes.map((e, i) => i + 1);
  console.log(princes);

  //   while (princes.length > 1) {
  //     let tmp = [];
  //     let shout = 0;
  //     while (true) {
  //       console.log(princes);
  //       if (shout === k) {
  //         shout = 0;
  //         princes.shift();
  //         princes = tmp.concat(princes);
  //         console.log(princes);
  //       } else {
  //         shout += 1;
  //         tmp.push(princes.shift());
  //       }
  //     }
  //   }
  answer = princes[0];

  return answer;
}

console.log(solution(8, 3));
