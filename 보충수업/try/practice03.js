// 주차요금 fee[180, 5000, 10, 500]
// "시간 차량번호 0~9 4자리 IN"
// 기록 record["06:32 1256 IN"]
// 차량 번호 순으로 요금을 출력하라 [0,0,0]

function solution(fee, record) {
  const result = [];
  const [defaultTime, defaultCharge, overTime, overCharge] = fee;
  const carNumsIn = Array(10000).fill(0);
  const carNumsDuration = Array(10000).fill(0);

  const records = record
    .map(v => v.split(' '))
    .map(([time, carNum, state]) => {
      const [hour, min] = time.split(':');
      time = parseInt(hour) * 60 + parseInt(min);
      return [time, parseInt(carNum), state];
    });

  for (let [time, carNum, state] of records) {
    if (state === 'IN') {
      carNumsIn[carNum] = time;
    } else {
      carNumsDuration[carNum] += time - carNumsIn[carNum];
    }
  }

  for (let i = 0; i < carNumsIn.length; i++) {
    if (carNumsIn[i] === 0) continue;
    const duration = carNumsDuration[i];
    if (duration <= defaultTime) result.push(defaultCharge);
    else {
      let price = defaultCharge;
      let over = duration - defaultTime;
      price += Math.ceil(over / overTime) * overCharge;
      result.push(price);
    }
  }

  return result;
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

console.log(solution(fee, record));
