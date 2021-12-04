function solution(number, k) {
  const nums = [...number].map(v => parseInt(v));
  const stack = [];

  for (let x of nums) {
    while (stack.length && stack[stack.length - 1] < x && k > 0) {
      stack.pop();
      k -= 1;
    }
    stack.push(x);
  }
  // console.log(stack);
  while (k !== 0) {
    stack.pop();
    k -= 1;
  }
  return stack.join('');
}

console.log(solution('4177252841', 4)); // "775841"

/**
"1924"	2	"94"
"1231234"	3	"3234"
 */
