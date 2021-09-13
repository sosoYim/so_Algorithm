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

    //올라갈 수 있는 모든 트럭이 올라가고
    if (ing_w + truck_weights[0] <= weight) {
      let truck = truck_weights.shift();
      ing_w += truck;
      // 현재 다리에 있는 트럭 무게 배열에 추가
      ing_trucks.push(truck);
    } else {
      ing_trucks.push(0);
    }
  }
  answer += bridge_length;
  return answer;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
console.log(solution(100, 100, [10]));
