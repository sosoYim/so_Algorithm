/*
최대 길이 연속부분수열
0과 1로 구성된 길이가 N인 수열이 주어집니다. 여러분은 이 수열에서 최대 k번을 0을 1로 변
경할 수 있습니다. 여러분이 최대 k번의 변경을 통해 이 수열에서 1로만 구성된 최대 길이의 
연속부분수열을 찾는 프로그램을 작성하세요.
만약 길이가 14인 다음과 같은 수열이 주어지고 k=2라면
1 1 0 0 1 1 0 1 1 0 1 1 0 1
여러분이 만들 수 있는 1이 연속된 최대 길이의 연속부분수열은 1 1 0 0 1 1 1 1 1 1 1 1 0 
1 이며 그 길이는 8입니다.
▣ 입력설명
매개변수 nums에 N(5<=N<100,000) 길이의 수열이 주어지고, k가 주어집니다.
▣ 출력설명
최대 길이를 반환하세요.
▣ 매개변수 형식 1 
[1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1], 2
▣ 반환값 형식 1
8
*/

// function solution(nums, k) {
//   let answer = 0,
//     lt = 0,
//     cnt = 0;
//   for (let rt = 0; rt < nums.length; rt++) {
//     if (nums[rt] === 0) cnt++;
//     while (cnt > k) {
//       if (nums[lt] === 0) cnt--;
//       lt++;
//     }
//     answer = Math.max(answer, rt - lt + 1);
//   }
//   return answer;
// }

function solution(nums, k) {
  let answer = 0;

  // 0을 기준으로 1의 갯수(cnt)를 센 tmp 배열 만들기
  let cnt = 0;
  const tmp = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0 || i === nums.length - 1) {
      tmp.push(cnt);
      cnt = 0;
    } else cnt++;
  }

  console.log(tmp);
  // k+1 길이 만큼 윈도우로 잡고 합을 구하여 가장 큰 구역을 찾는다
  // 최초 윈도우 값 구하고 answer에 넣기
  let sum = 0;
  for (let i = 0; i <= k; i++) {
    sum += tmp[i];
  }
  answer = sum;

  // 윈도우 슬라이딩 시작
  let lt = 0;
  for (let rt = k + 1; rt < tmp.length; rt++) {
    let comp = sum - tmp[lt] + tmp[rt];
    lt += 1;
    answer = Math.max(answer, comp);
  }

  // 반환값은 최대값 + k(1로 변환된 0의 길이)
  return answer + k;
}

console.log(solution([1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1], 2));
