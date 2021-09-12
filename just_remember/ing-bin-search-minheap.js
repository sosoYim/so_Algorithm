class MinHeap {
  //생성자
  constructor() {
    this.heap = [];
    this.heap.push([Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]);
  }

  //삽입 : 값을 마지막에 넣고, 이 값을 부모와 비교하며 정렬(upheap)
  insert(val) {
    this.heap.push(val);
    this.upheap(this.heap.length-1);
  }

  //삽입된 노드 정렬
  //비교중인 값을 복사해두기
  //부모와 비교해서 값이 더 작으면 바꾸기
  //자식에게 부무값 복사
  //pos를 부모의 pos로
  upheap(pos) {
    const [tmpPriority, tmpValue] = this.heap[pos];
    while(tmpPriority < this.heap[Math.floor(pos/2)[0]])
  }

  get() {}

  downheap(pos, len) {}

  size() {}
}

console.log(
  solution(
    5,
    [
      [1, 2, 1],
      [2, 3, 3],
      [5, 2, 2],
      [1, 4, 2],
      [5, 3, 1],
      [5, 4, 2],
    ],
    3
  )
);
console.log(
  solution(
    6,
    [
      [1, 2, 1],
      [1, 3, 2],
      [2, 3, 2],
      [3, 4, 3],
      [3, 5, 2],
      [3, 5, 3],
      [5, 6, 1],
    ],
    4
  )
);
