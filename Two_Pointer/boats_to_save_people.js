/*
https://leetcode.com/problems/boats-to-save-people/

You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats 
where each boat can carry a maximum weight of limit. 
Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.

Return the minimum number of boats to carry every given person.
Example 1:

Input: people = [1,2], limit = 3
Output: 1
Explanation: 1 boat (1, 2)
Example 2:

Input: people = [3,2,2,1], limit = 3
Output: 3
Explanation: 3 boats (1, 2), (2) and (3)
Example 3:

Input: people = [3,5,3,4], limit = 5
Output: 4
Explanation: 4 boats (3), (3), (4), (5)
*/

const numRescueBoats = function (people, limit) {
  let boat = 0;
  people.sort((a, b) => a - b);
  let lt = 0;
  let rt = people.length - 1;

  while (lt < rt) {
    const [left, right] = [people[lt], people[rt]];

    if (left + right <= limit) {
      lt += 1;
      rt -= 1;
    } else rt -= 1;
    boat += 1;
  }

  return lt === rt ? boat + 1 : boat;
};

const people = [1, 2];
const limit = 3;
console.log(numRescueBoats(people, limit));
