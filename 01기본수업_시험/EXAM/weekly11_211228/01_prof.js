function solution(nums, k) {
  if (nums.length % k !== 0) return 'NO';
  var map = new Map();
  nums.forEach(x => map.set(x, (map.get(x) || 0) + 1));
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i]) > 0) {
      for (let j = 0; j < k; j++) {
        if (map.get(nums[i] + j) > 0) map.set(nums[i] + j, map.get(nums[i] + j) - 1);
        else return 'NO';
      }
    }
  }
  return 'YES';
}
console.log(solution([3, 2, 1, 2, 3, 4, 3, 4, 5, 9, 10, 11], 3)); //YES
console.log(solution([1, 2, 3, 4], 2)); //YES
console.log(solution([1, 2, 3, 4, 5], 2)); //NO
console.log(solution([1, 2, 3, 4, 5, 5], 2)); //NO
console.log(solution([3, 3, 2, 2, 1, 1, 4, 4, 5, 5], 5)); //YES
