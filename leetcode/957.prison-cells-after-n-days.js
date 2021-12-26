/*
 * @lc app=leetcode id=957 lang=javascript
 *
 * [957] Prison Cells After N Days
 */

// @lc code=start
/**
 * @param {number[]} cells
 * @param {number} n
 * @return {number[]}
 */
function prisonAfterNDays(cells, n) {
  // var answer = [];
  if (n === 0) return cells;

  function update(L) {
    if (L === n) return;

    const temp = [...cells];
    temp[0] = 0;
    temp[temp.length - 1] = 0;

    for (let i = 1; i < cells.length - 1; i++) {
      const prev = cells[i - 1];
      const next = cells[i + 1];
      if (prev === next) temp[i] = 1;
      else temp[i] = 0;
    }
    // console.log({ L, temp, cells });
    cells = [...temp];
    update(L + 1);
  }
  update(0);
  return cells;
}
// @lc code=end
