function solution(orders, course) {
  let answer = [];
  let sH = new Map();
  let tempArr = [];

  // DFS
  function DFS(L, s, m, word) {
    if (L === m) {
      let joinStr = tempArr.join('');
      sH.set(joinStr, sH.get(joinStr) + 1 || 1);
    } else {
      for (let i = s; i < word.length; i++) {
        tempArr.push(word[i]);
        DFS(L + 1, i + 1, m, word);
        tempArr.pop();
      }
    }
  }

  // course의 길이가 2이면 이미 글자 길이가 2인것은 totalArr로,
  // 그것보다 더 큰 것은 temp배열로 가서 temp에 있는 단어를 split하여 조합 경우의수를 구함
  for (let i = 0; i < course.length; i++) {
    let totalArr = [];
    let temp = orders.filter(x => {
      if (x.length > course[i]) {
        return x;
      } else if (x.length === course[i]) {
        totalArr.push(x);
      }
    });
    sH.clear();
    for (let j = 0; j < totalArr.length; j++) {
      sH.set(totalArr[j], sH.get(totalArr[j]) + 1 || 1);
    }
    for (let j = 0; j < temp.length; j++) {
      let word = temp[j].split('').sort();
      DFS(0, 0, course[i], word);
    }

    let max = Math.max(...sH.values());

    for (let [a, b] of sH) {
      if (max === b && b > 1) {
        answer.push(a);
      }
    }
  }

  return answer.sort();
}
console.log(solution(['XYZ', 'XWY', 'WXA'], [2, 3]));