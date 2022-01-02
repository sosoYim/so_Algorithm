// function solution(schedule) {
//   const convertToIdx = str => {
//     //9:30
//     let [hh, mm] = str.split(':').map(v => +v);
//     return (hh * 60 + mm - 540) / 30;
//   };
//   // const days = {
//   //   MO: 1000,
//   //   TU: 1001,
//   //   WE: 1002,
//   //   TH: 3,
//   //   FR: 4,
//   // };
//   const plans = {};
//   // 분반별 20x4 시간표
//   for (let i = 1; i <= 5; i++) {
//     plans[i] = Array.from({ length: 26 }, () => Array(4).fill(0));
//   }

//   for (let row = 0; row < schedule.length; row++) {
//     for (let col = 0; col < schedule[0].length; col++) {
//       // row: 과목 1~5 col : 분반 A~D
//       const times = schedule[row][col].split(' ');
//       if (times.length === 2) {
//         let [day, time] = times;
//         for (let i = 0; i < 6; i++) {
//           console.log({ day, time, i, idx: convertToIdx(time) + i });
//           plans[row + 1][convertToIdx(time) + i][col] = day;
//         }
//       } else {
//         let [day1, time1, day2, time2] = times;
//         for (let i = 0; i < 3; i++) {
//           plans[row + 1][convertToIdx(time1) + i][col] = day1;
//           plans[row + 1][convertToIdx(time2) + i][col] = day2;
//         }
//       }
//     }
//   }
//   console.log(plans);
// }

// console.log(
//   solution([
//     ['MO 12:00 WE 14:30', 'MO 12:00', 'MO 15:00', 'MO 18:00'],
//     ['TU 09:00', 'TU 10:00', 'TU 15:00', 'TU 18:00'],
//     ['WE 09:00', 'WE 12:00', 'WE 15:00', 'WE 18:00'],
//     ['TH 09:30', 'TH 11:30', 'TH 15:00', 'TH 18:00'],
//     ['FR 15:00', 'FR 15:00', 'FR 15:00', 'FR 15:00'],
//   ])
// );
// // 896
