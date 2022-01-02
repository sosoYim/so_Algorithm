/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  // const nMap = new Map();
  // for (let i = 0; i < numCourses; i++) {
  //   nMap.set(i, []);
  // }
  // for (let [course, preCourse] of prerequisites) {
  //   nMap.set(course, [...nMap.get(course), preCourse]);
  // }

  const graph = Array.from({ length: numCourses }, () => Array(numCourses).fill(0));
  for (const [course, preCourse] of prerequisites) {
    graph[course][preCourse] = 1;
  }

  function DFS(course, preCourse) {
    // 들어야하는 과목(i)의 선행과목 중 course가 있는가
    // 있으면 answer = false; break all
    // course가 아니고 들어야하는 과목은 재귀
    for (let i = 0; i < numCourses; i++) {
      for (let j = 0; j < numCourses; j++) {
        if (graph[j][i] === 1) {
          DFS(course, i);
        }
      }
    }
  }

  for (let i = 0; i < numCourses; i++) {
    for (let j = 0; j < numCourses; j++) {
      if (graph[i][j] === 1) DFS(course, preCourse);
    }
  }
};
// @lc code=end

console.log(
  canFinish(4, [
    [1, 0],
    [0, 1],
  ])
);
