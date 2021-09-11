//https://programmers.co.kr/learn/courses/30/lessons/12978
//배달

class Heap {
  constructor() {
    this.heap = [];
    this.heap.push([Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]);
  }

  insert(val) {
    this.heap.push(val);
    this.upheap(this.heap.length - 1);
  }

  upheap(pos) {
    const [tmpPriority, tmpValue] = this.heap[pos];
    while (tmpPriority < this.heap[Math.floor(pos / 2)][0]) {
      this.heap[pos] = this.heap[Math.floor(pos / 2)];
      pos = Math.floor(pos / 2);
    }
    this.heap[pos] = [tmpPriority, tmpValue];
  }

  get() {
    if (this.size() === 1) return this.heap.pop();
    const res = this.heap[1];
    this.heap[1] = this.heap.pop();
    this.downheap(1, this.heap.length - 1);
    return res;
  }

  downheap(pos, len) {
    const [tmpPriority, tmpValue] = this.heap[pos];
    let child;
    while (pos <= Math.floor(len / 2)) {
      child = pos * 2;
      if (child < len && this.heap[child][0] > this.heap[child + 1][0]) child += 1;
      if (tmpPriority <= this.heap[child][0]) break;
      this.heap[pos] = this.heap[child];
      pos = child;
    }
    this.heap[pos] = [tmpPriority, tmpValue];
  }

  size() {
    return this.heap.length - 1;
  }
}

function solution(N, road, h) {
  const graph = new Array(N + 1).fill().map(() => new Array(0));
  const INF = 1e9;
  const distance = new Array(N + 1).fill(INF);
  for (const [a, b, cost] of road) {
    graph[a].push([b, cost]);
    graph[b].push([a, cost]);
  }

  function dikstra(start) {
    distance[start] = 0;
    const heap = new Heap();
    heap.insert([distance[start], start]);

    while (heap.size()) {
      const [dist, now] = heap.get();

      if (dist <= distance[now]) {
        for (const [next, d] of graph[now]) {
          if (distance[next] > dist + d) {
            distance[next] = dist + d;
            heap.insert([distance[next], next]);
          }
        }
      }
    }
  }

  dikstra(1);
  return distance.filter(x => x <= h).length;
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
