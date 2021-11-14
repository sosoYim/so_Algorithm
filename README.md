# so_Algorithm

Algorithm everyday

## 푼 문제

[유형 없음 / 프로그래머스 / 완주하지 못한 선수](https://programmers.co.kr/learn/courses/30/lessons/42576)
[플로이드 와샬 / 프로그래머스 / 배달](https://programmers.co.kr/learn/courses/30/lessons/12978)
[이진변환반복하기](https://programmers.co.kr/learn/courses/30/lessons/70129)
[짝지어 제거하기](https://programmers.co.kr/learn/courses/30/lessons/12973)
[다리를 지나는 트럭](https://programmers.co.kr/learn/courses/30/lessons/42583)
[괄호회전하기](https://programmers.co.kr/learn/courses/30/lessons/76502) (21/10/26)
[3. longest substring without repeatition](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
[15. 3sum](https://leetcode.com/problems/3sum/submissions/) (21/10/27)
[152. Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/) (21/10/27)
[866. Prime Palindrome](https://leetcode.com/problems/prime-palindrome/) (풀이 21/10/27)
[387. First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/) (21/10/28)
[500. Keyboard row](https://leetcode.com/problems/keyboard-row/) (21/10/28) (hash)
[전화번호 목록](https://programmers.co.kr/learn/courses/30/lessons/42577)
[오픈채팅방](https://programmers.co.kr/learn/courses/30/lessons/42888?language=javascript) (21/11/01)
[kko 위장](https://programmers.co.kr/learn/courses/30/lessons/42578) (21/11/10)

### DFS/BFS

- [타겟넘버](https://programmers.co.kr/learn/courses/30/lessons/43165)
- [게임맵 최단거리](https://programmers.co.kr/learn/courses/30/lessons/1844)
- [단어변환](https://programmers.co.kr/learn/courses/30/lessons/43163)
- [모음사전](https://programmers.co.kr/learn/courses/30/lessons/84512) (21/10/28)

## 푸는 중

[122. Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)
[쿼드 압축 후 개수 세기](https://programmers.co.kr/learn/courses/30/lessons/68936)
[뉴스클러스터링](https://programmers.co.kr/learn/courses/30/lessons/17677)
[33. Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)
[205. Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings/) (21/10/28 easy인데 어려움)
[kko3차 n진수 게임]()

- 꼭 풀어보기(2021/11/11 문제풀이 강의)
  [무지의 먹방 라이브](https://programmers.co.kr/learn/courses/30/lessons/42891)
  [합승택시(플로이드와샬)](https://programmers.co.kr/learn/courses/30/lessons/72413)
  [93.Restore IP Adredd](https://leetcode.com/problems/restore-ip-addresses/)
  [백준2042. 구간 합 구하기](https://www.acmicpc.net/problem/2042)

## 아하

### 괄호 회전하기

괄호들이 있는 문자열을 배열(sArr)로 split해준다.
Map에 각각의 (왼쪽)괄호들을 키값으로 두고 0으로 값을 세팅한다.
sArr을 돌며 괄호가 무엇인지 판단한 후에 Map에서 해당 키에 대한 값을 왼쪽 괄호 : -1, 오른쪽 괄호 : 1을 해준다.
이 후 해당 키값이 0보다 작으면 오른쪽 괄호의 갯수가 더 많다는 것이기 때문에 false로 반환하고
반복이 끝까지 마무리되면 true로 해주었다.

> 오류 : ({[}]) 와 같이 왼쪽 오른쪽 번갈아 나오긴 했지만 쌍은 맞지 않는 경우 위의 로직으로 걸러내지 못한다.
> 해결 방법 : stack을 이용해 stack의 마지막 요소와 괄호를 항상 비교하며 넣는다.

```jsx
for (let x of sArr) {
  let addVal = ['{', '[', '('].includes(x) ? 1 : -1;
  let setX = ['{', '}'].includes(x) ? '{' : ['[', ']'].includes(x) ? '[' : '(';
  arrMap.set(setX, (arrMap.get(setX) || 0) + addVal);
  console.log(arrMap, 'ing', x);
  if (arrMap.get(setX) < 0) return false;
}
```
