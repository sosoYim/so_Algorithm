// https://programmers.co.kr/learn/courses/30/lessons/42583
// 다리를 지나는 트럭
// 문제 이해가 관건
// 총 소요 시간을 마지막 트럭이 다리위에 올라가는 시점 + 다리 길이로 잡았다.

function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let ing_w = 0;
  let ing_trucks = [];
  while (truck_weights.length > 0) {
    //1초 증가
    answer++;
    // 이번턴에 다리를 나갈 차가 있다면 shift
    if (ing_trucks.length === bridge_length) {
      ing_w -= ing_trucks.shift();
    }

    //지금 다리 위의 무게(ing_w) + 첫번째 트럭의 무게 < 한계
    //다리에 트럭이 올라가고, 현재 다리 위의 무게 더하기, 현재 다리 위에 있는 트럭의 배열에 추가
    if (ing_w + truck_weights[0] <= weight) {
      let truck = truck_weights.shift();
      ing_w += truck;
      ing_trucks.push(truck);
    } else {
      //아니면 0값 넣기
      ing_trucks.push(0);
    }
  }
  answer += bridge_length;
  return answer;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
console.log(solution(100, 100, [10]));
