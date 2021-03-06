function solution(fees, records) {
  let answer = [];
  let sum = Array(10001).fill(0);
  let last = Array(10001).fill(0);
  let isIn = Array(10001).fill(0);
  for (let x of records) {
    let tmp = x.split(' ');
    let time = tmp[0].split(':');
    let hour = parseInt(time[0]);
    let minute = parseInt(time[1]);
    let carNumber = parseInt(tmp[1]);
    if (tmp[2] === 'IN') {
      last[carNumber] = hour * 60 + minute;
      isIn[carNumber] = 1;
    } else {
      sum[carNumber] += hour * 60 + minute - last[carNumber];
      isIn[carNumber] = 0;
    }
  }
  for (let i = 0; i < 10000; i++) {
    if (isIn[i] === 1) {
      sum[i] += 23 * 60 + 59 - last[i];
      isIn[i] = 0;
    }
  }
  for (let i = 0; i < 10000; i++) {
    if (sum[i] > 0) {
      answer.push(
        fees[1] + Math.max(parseInt((sum[i] - fees[0] + (fees[2] - 1)) / fees[2]), 0) * fees[3]
      );
    }
  }
  return answer;
}

console.log(
  solution(
    [180, 5000, 10, 500],
    [
      '05:00 9087 IN',
      '07:13 7168 IN',
      '08:21 0070 IN',
      '11:51 0070 OUT',
      '12:34 1001 IN',
      '15:29 7168 OUT',
      '18:11 1001 OUT',
      '19:20 3495 IN',
      '20:47 9087 OUT',
      '23:48 3495 OUT',
    ]
  )
); //[6500, 13000, 9500, 21000, 43500]

console.log(
  solution(
    [180, 5000, 10, 500],
    [
      '00:00 0000 IN',
      '00:40 0001 IN',
      '01:00 0000 OUT',
      '08:40 2020 IN',
      '11:08 0001 OUT',
      '17:50 9999 IN',
      '19:10 2020 OUT',
      '23:59 9999 OUT',
    ]
  )
); //[5000, 27500, 27500, 14500]

console.log(
  solution(
    [180, 5000, 10, 500],
    [
      '00:00 8838 IN',
      '00:00 5743 IN',
      '01:10 8838 OUT',
      '04:00 7777 IN',
      '10:34 5743 OUT',
      '12:00 7777 OUT',
    ]
  )
); //[28000, 20000, 5000]

console.log(
  solution(
    [180, 5000, 10, 500],
    [
      '06:32 1256 IN',
      '08:40 0547 IN',
      '10:20 1256 OUT',
      '11:10 3472 IN',
      '13:40 3472 OUT',
      '17:50 0547 OUT',
    ]
  )
); //[23500, 7500, 5000]

console.log(
  solution(
    [180, 5000, 10, 500],
    [
      '07:25 9999 IN',
      '11:49 7752 IN',
      '12:01 3289 IN',
      '12:34 3289 OUT',
      '13:59 7752 OUT',
      '16:17 9999 OUT',
      '16:18 3472 IN',
      '16:19 3472 OUT',
    ]
  )
); //??[5000, 5000, 5000, 23000]

console.log(
  solution(
    [120, 3000, 9, 300],
    [
      '07:25 9999 IN',
      '11:49 7752 IN',
      '12:01 3289 IN',
      '12:34 3289 OUT',
      '13:59 7752 OUT',
      '15:01 3289 IN',
      '15:03 3289 OUT',
      '15:09 3289 IN',
      '16:17 9999 OUT',
      '16:18 3472 IN',
      '16:19 3472 OUT',
    ]
  )
); //??[18000, 3000, 3600, 16800]

console.log(
  solution(
    [100, 0, 12, 500],
    [
      '07:25 9999 IN',
      '11:49 7752 IN',
      '12:01 3289 IN',
      '12:34 3289 OUT',
      '13:59 7752 OUT',
      '15:01 3289 IN',
      '15:03 3289 OUT',
      '15:09 3289 IN',
      '16:17 9999 OUT',
      '16:18 3472 IN',
      '16:19 3472 OUT',
      '17:17 9999 IN',
      '18:17 9999 OUT',
      '18:37 9999 IN',
    ]
  )
); //??[19500, 0, 1500, 34000]

console.log(
  solution(
    [100, 0, 12, 500],
    [
      '07:25 9999 IN',
      '11:49 7752 IN',
      '12:01 3289 IN',
      '12:34 3289 OUT',
      '12:37 0001 IN',
      '13:59 7752 OUT',
      '15:01 3289 IN',
      '15:03 3289 OUT',
      '15:09 3289 IN',
      '16:17 9999 OUT',
      '16:18 3472 IN',
      '16:19 3472 OUT',
      '17:17 9999 IN',
      '18:17 9999 OUT',
      '18:37 9999 IN',
    ]
  )
); //??[24500, 19500, 0, 1500, 34000]

console.log(
  solution(
    [100, 3000, 14, 500],
    [
      '07:25 9999 IN',
      '11:49 7752 IN',
      '12:01 3289 IN',
      '12:34 3289 OUT',
      '12:37 0001 IN',
      '13:59 7752 OUT',
      '15:01 3289 IN',
      '15:02 0002 IN',
      '15:03 3289 OUT',
      '15:09 3289 IN',
      '16:17 9999 OUT',
      '16:18 3472 IN',
      '16:19 3472 OUT',
      '17:17 9999 IN',
      '18:17 9999 OUT',
      '18:37 9999 IN',
    ]
  )
); //??[24000, 19000, 20000, 3000, 4500, 32500]

console.log(
  solution(
    [140, 5000, 14, 300],
    [
      '07:25 9999 IN',
      '11:49 7752 IN',
      '12:01 3289 IN',
      '12:34 3289 OUT',
      '12:37 0001 IN',
      '13:59 7752 OUT',
      '15:01 3289 IN',
      '15:02 0002 IN',
      '15:03 3289 OUT',
      '15:09 3289 IN',
      '16:17 9999 OUT',
      '16:18 3472 IN',
      '16:19 3472 OUT',
      '16:29 0003 IN',
      '17:17 9999 IN',
      '18:17 9999 OUT',
      '18:37 9999 IN',
    ]
  )
); //??[16700, 13700, 11900, 14300, 5000, 5000, 21800]
