function solution(s){
    let answer = 0;
    let zero=0, one=0;
    if(s[0]==='1') one=1;
    else zero = 1;

    for(let i=1; i<s.length; i++){
        if(!s[1]) return 0; //문자가 하나일 때는 0을 반환
        if(s[i-1]!==s[i]){
            if(s[i]==='1') one++;
            else zero++;
        }
    }
    answer = Math.min(one, zero);

    return answer;
}

console.log(solution("100001111")); //1
console.log(solution("10010111100")); //3

