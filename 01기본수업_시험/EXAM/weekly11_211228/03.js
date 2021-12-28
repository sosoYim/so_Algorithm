// 현수는 N개의 사과를 먹을려고 합니다. 현수는 사과를 먹을 때 다음과 같은 규칙으로 먹으려고 합니다. 다음은 현수가 하루 동안 먹을 수 있는 사과의 개수입니다.
// 1) 사과 한 개를 먹는다.
// 2) 현재 있는 사과의 개수가 2로 나누어 떨어지는 개수라면 그 절반(사과개수 / 2)을 먹는다.
// 3) 현재 있는 사과의 개수가 3으로 나누어 떨어진다면 (사과개수 / 3) * 2 개의 사과를 먹는다.
// 현수에게 N개의 사과가 주어지면 최소 몇 일만에 사과를 모두 먹을 수 있는지 알아내는 프로그램을 작성하세요.

// ▣ 입력설명매개변수 n에 사과의 개수가 주어집니다. (1<=n<=2,000,000,000)

// ▣ 출력설명
// 현수가 사과를 모두 먹기위해 필요한 최소 날수를 반환합니다.

// ▣ 매개변수 형식 1
// 10

// ▣ 반환값 형식 1
// 4

function solution(n) {
  const dy = Array.from({ length: n }, (_, i) => n - i);
  dy.unshift(0);
  console.log(dy);
  for (let i = dy.length - 1; i >= 0; i--) {
    const compIdx = i - (i / 3) * 2;
    if (i % 3 === 0 && compIdx > 0) {
      dy[compIdx] = Math.min(dy[compIdx], dy[i] + 1);
    }
  }
  for (let i = dy.length - 1; i >= 0; i--) {
    const compIdx = i - i / 2;
    if (i % 2 === 0 && compIdx > 0) {
      dy[compIdx] = Math.min(dy[compIdx], dy[i] + 1);
    }
  }
  return dy[1];
}

// console.log(solution(10)); //4
// console.log(solution(6));
