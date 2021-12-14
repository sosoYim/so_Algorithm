/**
 * https://leetcode.com/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
var alertNames = function (keyName, keyTime) {
  const sMap = new Map();
  const answer = [];
  for (let i = 0; i < keyName.length; i++) {
    const [hh, mm] = keyTime[i].split(':');
    const time = +hh * 60 + +mm;
    if (sMap.has(keyName[i])) sMap.set(keyName[i], [...sMap.get(keyName[i]), time]);
    else sMap.set(keyName[i], [time]);
  }
  for (let [name, times] of sMap) {
    let lt = 0;
    times.sort((a, b) => a - b);
    // console.log(name, times);
    for (let rt = 0; rt < times.length; rt++) {
      // console.log(lt, rt, times[lt], times[rt]);
      // rt와 lt 사이의 차이가 60 초과일 때 (처음 시간 보다 한시간 지났음)
      // lt를 rt와 한시간 이내로 차이날 때까지 당긴다. 당기면서 cnt도 줄인다.
      while (times[rt] - times[lt] > 60) {
        // console.log(lt, rt, '에서 범위 줄임');
        // cnt -= 1;
        lt += 1;
      }
      // 현재 rt 카운트
      // cnt += 1;
      // if (cnt >= 3) {
      if (rt - lt + 1 >= 3) {
        answer.push(name);
        break;
      }
      // console.log('처리 후 lt,rt', lt, rt);
      // console.log('처리 후 cnt', cnt);
    }
  }

  return answer.sort();
};

// const keyName = ['daniel', 'daniel', 'daniel', 'luis', 'luis', 'luis', 'luis'];
// const keyTime = ['10:00', '10:40', '11:00', '09:00', '11:00', '13:00', '15:00']; //Daniel

const keyName = ['a', 'a', 'a', 'a', 'a', 'a', 'b', 'b', 'b', 'b', 'b'];
const keyTime = [
  '23:27',
  '03:14',
  '12:57',
  '13:35',
  '13:18',
  '21:58',
  '22:39',
  '10:49',
  '19:37',
  '14:14',
  '10:41',
];

console.log(alertNames(keyName, keyTime));
