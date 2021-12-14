function solution(s1, s2){
    let answer;
    if(s1.length !== s2.length) return false;

    let zero =0, one =0;
    //두배열의 인덱스 0부터 끝까지 비교
    for(let i=0; i<s1.length; i++){
        //같은 위치의 두 값이 다르다면
        if(s1[i] !== s2[i]){
        //바꿔야할 0 혹은 1의 갯수 카운트
            if(s1[i]==='0'){
                zero++;
            }else{
                one++;
            }
        }
        console.log(`${s1[i]} : ${s2[i]}: ${zero} : ${one}`);
    }

    if(zero>one){
        answer = zero;
    }else{
        answer = one;
    }

    return answer;
}

console.log(solution("11000111","11100110"));