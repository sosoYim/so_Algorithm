// https://leetcode.com/problems/sort-colors/submissions/
// sort 금지
// nums 참조값 바꿀 수 없음

let sortColors = function (nums) {
  let lt = 0;
  let rt = 1;
  while (lt < rt && rt < nums.length) {
    if (lt === nums.length - 1) break;
    let left = nums[lt];
    let right = nums[rt];

    if (right - left < 0) {
      // console.log(`${left} : ${right} in!`);
      nums[rt] = left;
      nums[lt] = right;
      lt -= 1;
      rt -= 1;
    } else {
      lt += 1;
      rt += 1;
    }
  }
  return nums;
};

/* 
// 혜연님 풀이 : 
// 길이가 2 이하인 것들은 따로 처리해줘야 한다.
// flag를 0부터(정렬해야할 가장 작은 수) 둔다.
// lt 와 rt 를 양 끝에 두고 rt의 값이 더 작으면 둘의 위치를 교체
// lt가 flag와 같으면 => 다를 때까지 lt ++
// 

const nums = [0, 1, 2];

const sortColors = nums => {
  let lt = 0;
  let rt = 1;
  let flag = 0;
  if (nums.length < 2) {
    return;
  }
  while (flag < 2) {
    if (lt === nums.length - 2) {
      if (nums[lt] > nums[rt]) {
        [nums[lt], nums[rt]] = [nums[rt], nums[lt]];
      }
      break;
    }
    if (nums[lt] > nums[rt]) {
      [nums[lt], nums[rt]] = [nums[rt], nums[lt]];
      if (rt === nums.length - 1) {
        flag++;
        lt++;
        rt = lt + 1;
      } else if (nums[lt] === flag) {
        lt++;
        rt = lt + 1;
      }
    } else {
      rt++;
      if (rt === nums.length) {
        lt++;
        rt = lt + 1;
      }
    }
    console.log(nums, lt, rt);
  }
};

sortColors(nums);

console.log(nums);
*/

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

console.log(sortColors([2, 0, 2, 1, 1, 0]));
