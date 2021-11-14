/*
(미완성)
https://leetcode.com/problems/two-city-scheduling/
1029. Two City Scheduling

A company is planning to interview 2n people. Given the array costs where costs[i] = [aCosti, bCosti], the cost of flying the ith person to city a is aCosti, and the cost of flying the ith person to city b is bCosti.

Return the minimum cost to fly every person to a city such that exactly n people arrive in each city.
*/

const twoCitySchedCost = function (costs) {
  let result = 0;
  // a,b 사이의 값 차이가 적게나는 것을 기준으로 정렬
  costs.sort((a, b) => (Math.abs(a[0] - a[1]) - Math.abs(b[0] - b[1]) < 0 ? -1 : 1));

  console.log(costs);

  let aCnt = 0;
  let bCnt = 0;
  const totalCnt = costs.length * 2;
  const maxCnt = Math.ceil(totalCnt / 2);
  for (let i = 0; i < costs.length; i++) {
    let select = costs[i][0] > costs[i][1] ? 'a' : costs[i][0] < costs[i][1] ? 'b' : 'same';

    select = aCnt >= maxCnt ? 'b' : bCnt >= maxCnt ? 'a' : select;

    if (select === 'same') {
      result += costs[i][0];
    } else if (select === 'a') {
      aCnt += 1;
      result += costs[i][0];
    } else if (select === 'b') {
      bCnt += 1;
      result += costs[i][1];
    } else {
      console.log(costs[i]);
    }
  }

  return result;
};

// console.log(
//   twoCitySchedCost([
//     [10, 20],
//     [30, 200],
//     [400, 50],
//     [30, 20],
//   ])
// );
console.log(
  twoCitySchedCost([
    [259, 770],
    [448, 54],
    [926, 667],
    [184, 139],
    [840, 118],
    [577, 469],
  ])
);
