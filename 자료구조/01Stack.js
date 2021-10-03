const Stack = (function () {
  function Stack(array = []) {
    if (!Array.isArray(array)) {
      throw new TypeError(`${array} is not an array`);
    }
    this.array = array;
  }
  Stack.prototype = {
    // 프로토타입 교체
    constructor: Stack,
    // 스택의 가장 마지막에 밀어 넣기
    push(...args) {
      //return this.array.push(value);
      // return (this.array[this.array.length] = value);
      this.array = [...this.array, ...args];
      return this.array;
    },
    pop() {
      // return this.array.pop();
      const poped = this.array.splice(this.array.length - 1, 1);
      return poped;
    },
    entries() {
      return [...this.array];
    },
  };
  return Stack;
})();

const stack = new Stack([1, 2]);
console.log(stack.entries());
console.log(stack.pop());
console.log(stack.push(7, 5));
console.log(stack);
