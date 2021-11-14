function solution(fees, records) {
  const result = [];
  const [defaultTemp, defaultPrix, supTemp, supPrix] = fees;
  const inTime = Array(10000).fill(0);
  const stayTime = Array(10000).fill(0);
  const checkIn = Array(10000).fill(0);

  records = records.map(record => {
    const [time, carNum, state] = record.split(' ');
    const [hh, mm] = time.split(':');
    const timeInt = parseInt(hh) * 60 + parseInt(mm);
    const carNumInt = parseInt(carNum);
    return [timeInt, carNumInt, state];
  });
  // console.log(records);

  for (let [time, car, state] of records) {
    if (state === 'IN') {
      checkIn[car] = 1;
      inTime[car] = time;
    } else {
      // OUT
      checkIn[car] = 0;
      stayTime[car] = stayTime[car] + time - inTime[car];
      // console.log(stayTime[car]);
    }
  }

  for (let i = 0; i < checkIn.length; i++) {
    if (checkIn[i] === 1) {
      stayTime[i] = stayTime[i] + (23 * 60 + 59) - inTime[i];
      // console.log(stayTime[i]);
    }
  }

  for (let i = 0; i < stayTime.length; i++) {
    if (stayTime[i] === 0) continue;
    let price = defaultPrix;
    if (stayTime[i] > defaultTemp) {
      const plusTime = stayTime[i] - defaultTemp;
      price += Math.ceil(plusTime / supTemp) * supPrix;
    }
    result.push(price);
  }

  return result;
}

const fees = [180, 5000, 10, 600];
const records = [
  '05:34 5961 IN',
  '06:00 0000 IN',
  '06:34 0000 OUT',
  '07:58 5961 OUT',
  '07:59 0148 IN',
  '18:59 0000 IN',
  '19:09 0148 OUT',
  '22:59 5961 IN',
  '23:00 5961 OUT',
];
console.log(solution(fees, records));
