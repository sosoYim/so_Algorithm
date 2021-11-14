//https://programmers.co.kr/learn/courses/30/lessons/42586
//기능개발
//30분

function solution(progresses, speeds) {
  let answer = [];
  let durations = [];
  let deploy = [];
  //남은 퍼센트에 속도를 나눈 후 반올림 => 일수
  //일수(duration)을 durations에 넣기
  for (let i = 0; i < progresses.length; i++) {
    durations.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }

  //기능별 배포기간(durations)을 모두 비교할 때 까지
  while (durations.length > 0) {
    if (deploy.length === 0 || deploy[0] >= durations[0]) {
      deploy.push(durations.shift());
    } else {
      answer.push(deploy.length);
      deploy = [];
    }
  }
  //기능별 배포기간이 다 돌았고 answer에는 들어가지 않은 경우
  if (deploy.length !== 0) answer.push(deploy.length);

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
// console.log(solution([93, 30, 55], [1, 30, 5]
