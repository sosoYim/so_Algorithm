/**
 * 1기 카카오 코테 3번 문제
케로와 베로니의 책 사진 찍기
 > 바이토닉 수열 (정점찍고 내려오는 연속부분집합) 구하면 될 듯

케로와 베로니는 서점에서 카카오스토리에 올릴 책 사진을 찍고 있습니다. 둘은 책꽂이에 꽂혀 있는 책의 높이가 아래 수식을 만족해야 사진이 만족스럽게 나온다는 것을 알아챘습니다.

￼

이 조건을 만족하는 여러 사진이 있으면 케로와 베로니는 책이 가장 많이 나온 사진을 고릅니다.

책꽂이에 꽂혀 있는 책의 높이를 배열로 받았을 때, 케로와 베로니가 고른 사진에 책이 몇 권 있는지 알려주세요!

예제

arr = [10, 8, 9, 15, 12, 6, 7];
주어진 수식을 만족하면서 가장 많은 책이 담긴 사진 [8, 9, 15, 12, 6]의 길이인 5를 반환하면 됩니다.

제약조건
1 <= n <= 10^5
1 <= arr[i] <= 10^9
 */

function solution(arr) {
  let result = 0;
  let lt = 0;
  let point = -1;
  for (let rt = 1; rt < arr.length; rt++) {
    if (arr[rt] > arr[rt - 1]) {
      point = rt;
    } else if (arr[rt] < arr[rt - 1] && point > 0) {
      result = Math.max(result, rt - lt + 1);
      if (arr[rt + 1] > arr[rt]) lt = rt;
    }
  }

  return result;
}

console.log(solution([10, 8, 9, 15, 12, 6, 7]));
