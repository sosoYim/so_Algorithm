// 주차요금 fee[180, 5000, 10, 500]
// "시간 차량번호 0~9 4자리 IN"
// 기록 record["06:32 1256 IN"]
// 차량 번호 순으로 요금을 출력하라 [0,0,0]

function solution(fee, record) {
  let answer = [];
  const [basicLimit, basicCost, plusLimit, plusCost] = fee;

  const records = record.map(v => v.split(' '));
  // 차번호가 인덱스, 들어간 시간
  const inTimes = Array(10000).fill(0);
  // 차가 머문 시간
  const durationTimes = Array(10000).fill(0);

  for (let i = 0; i < records.length; i++) {
    const [record, carNum, state] = records[i];
    if (state === 'IN') {
      inTimes[parseInt(carNum)] = changeMin(record);
      // console.log(inTime[parseInt(carNum)]);
    } else {
      let difTime = changeMin(record) - inTimes[parseInt(carNum)];
      durationTimes[parseInt(carNum)] = difTime;
    }
  }

  console.log(durationTimes[1256], durationTimes[547]);

  for (let i = 0; i < durationTimes.length; i++) {
    let difTime = durationTimes[i];
    if (difTime === 0) continue;
    if (difTime <= basicLimit) answer.push(basicCost);
    else {
      let cost = basicCost;
      difTime -= basicLimit;
      cost += Math.ceil(difTime / plusLimit) * plusCost;
      answer.push(cost);
    }
  }

  // console.log(inTime);
  // console.log(durationTime);

  return answer;
}

function changeMin(s) {
  // console.log(s);
  const [hh, mm] = s.split(':');
  return parseInt(hh) * 60 + parseInt(mm);
}

const fee = [180, 5000, 10, 500];
const record = [
  '06:32 1256 IN',
  '08:40 0547 IN',
  '10:20 1256 OUT',
  '11:10 3472 IN',
  '13:40 3472 OUT',
  '17:50 0547 OUT',
];

// const record2 = [
//   '00:00 8838 IN',
//   '00:00 5743 IN',
//   '01:10 8838 OUT',
//   '04:00 7777 IN',
//   '10:34 5743 OUT',
//   '12:00 7777 OUT',
// ];

console.log(solution(fee, record));
