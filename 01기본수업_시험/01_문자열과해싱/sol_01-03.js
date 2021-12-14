function solution(s){
    
    let answer = [];

    for(let i =0; i<s.length; i++){
        answer.push(s.substring(i));
    }
    console.log(answer);
    answer.sort();
    return answer;

}

console.log(solution("kseaedu"));