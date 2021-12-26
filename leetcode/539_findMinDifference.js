/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  let answer = Number.MAX_SAFE_INTEGER;
  const minutes = timePoints
    .map(timepoint => {
      const [hh, mm] = timepoint.split(':');
      return +hh * 60 + +mm;
    })
    .sort((a, b) => a - b);
  minutes.push(24 * 60 + minutes[0]);
  // console.log(minutes);

  for (let i = 1; i < minutes.length; i++) {
    // console.log(minutes[i], minutes[i - 1]);
    answer = Math.min(answer, minutes[i] - minutes[i - 1]);
  }
  return answer;
};

// console.log(findMinDifference(['23:59', '00:00']));
console.log(findMinDifference(['12:12', '00:13']));
