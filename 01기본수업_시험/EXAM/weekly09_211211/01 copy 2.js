function solution(arr) {
  const min = [];
  const recordMin = Array(arr.length).fill(0);
  // recordMin[0] = arr[0];
  let lt = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    // console.log(rt, 'start');
    while (min[0] > arr[rt]) {
      min.pop();
    }
    min.push(arr[rt]);
    console.log(min);
    if (rt === 0) recordMin[rt] = arr[rt];
    else {
      if (min[0] < arr[rt]) recordMin[rt - 1] + arr[rt];
      else recordMin[rt] = min[0] * rt + arr[rt];
    }

    if (min[0] === arr[rt]) {
      min.shift();
    }
  }
  // console.log(recordMin);
  return recordMin.reduce((acc, val) => acc + val, 0);
}

console.log(solution([3, 1, 2, 4]));
// console.log(solution([3, 4, 2]));
