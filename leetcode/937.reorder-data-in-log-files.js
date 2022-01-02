/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
  const digits = [];
  const letters = [];
  for (let log of logs) {
    // 정규식 : / \d/g  한 칸 띄우고부터의 글씨 찾기
    const isLet = Number.isNaN(+log.split(' ')[1]);
    isLet ? letters.push(log) : digits.push(log);
  }

  letters.sort((a, b) => {
    const aBody = a.slice(a.indexOf(' ') + 1);
    const bBody = b.slice(b.indexOf(' ') + 1);

    const c = aBody.localeCompare(bBody);
    if (c) return c;
    return a.localeCompare(b);
  });

  return [...letters, ...digits];
};

console.log(
  reorderLogFiles(['dig1 8 1 5 1', 'let1 art can', 'dig2 3 6', 'let2 own kit dig', 'let3 art zero'])
);
