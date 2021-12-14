function solution(words) {
  let answer = 0;
  //let tempAnswer = 0;
  let len = words.length;
  words.sort((a, b) => a.length - b.length); //길이가 더 짧은 순으로 정렬

  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (isUnique(words[i], words[j])) {
        let tmp = words[i].length * words[j].length;
        if (tmp > answer) answer = tmp;
      }
    }
  }

  function isUnique(short, long) {
    for (let x of short) {
      if (long.includes(x)) return false;
    }
    return true;
  }

  return answer;
}

console.log(solution(['skudy', 'kstue', 'time', 'back', 'good']));
