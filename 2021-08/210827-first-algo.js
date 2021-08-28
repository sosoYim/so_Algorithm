//https://programmers.co.kr/learn/courses/30/lessons/82612?language=javascript
//Programmers

function solution(price, money, count) {
    let answer = -1;
    let tmp = 0;
    for(let i = 1; i<count+1; i++){
        tmp += price*i;
    }

    (money - tmp) > 0 ? answer = 0 : answer = Math.abs(money - tmp);

    return answer;
}
console.log(solution(3, 20, 4));

// 다른 풀이 : 가우스 함수
function solution2(price, money, count) {
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
}