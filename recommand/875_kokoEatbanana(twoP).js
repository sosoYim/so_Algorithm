/**
 * https://leetcode.com/problems/koko-eating-bananas/
 */
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  // 최대한 천천히 다 먹을 수 있는 속도 k => 조건에 부합하면서 가장 최소값
  let answer = Number.MAX_SAFE_INTEGER;
  let lt = 1;
  let rt = Number.MAX_SAFE_INTEGER; // 때려박아 큰 값

  while (lt <= rt) {
    // lt rt 같은거 까지 봐줘야 함!!!!
    let mid = Math.ceil((lt + rt) / 2);
    // piles 인자들을 mid 값으로 나눈 올림 값을 모두 더하면 => h보다 작거나 같아야 한다.
    const needTime = piles.reduce((acc, v) => Math.ceil(v / mid) + acc, 0);

    if (needTime <= h) {
      answer = Math.min(answer, mid);
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  return answer;
};

console.log(minEatingSpeed([3, 6, 7, 11], 8)); // 4
