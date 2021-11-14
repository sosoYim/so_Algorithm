// https://leetcode.com/problems/container-with-most-water/

// 적어도 하나의 경우에서 최선인 곳에서 시작(가로가 가장 긴)
// 두 개의 선택 중 더 나은 선택을 하며 lt rt 구하기 (lt 높이 rt높이 중 짧은쪽 버리기)
// 두 개의 선택 중 나은것이지 좁힌 값이 최선이라는 보장은 없다.
// 그러니 쭉 밀어가며 비교하면 됨!

const maxArea = height => {
  let lt = 0;
  let rt = height.length - 1;
  let answer = 0;
  // 양 끝에서 (가로가 가장 긴 경우 좁혀간다)
  while (lt < rt) {
    answer = Math.max(answer, (rt - lt) * Math.min(height[lt], height[rt]));
    height[lt] < height[rt] ? lt++ : rt--;
  }
  return answer;
};

// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); //49
// console.log(maxArea([1, 2, 1, 1]));
console.log(maxArea([2, 3, 4, 5, 18, 17, 6]));
