function solution(s){
    let answer;

    let sH = new Map();

    //앞으로 카운팅은 이렇게 한다!!!!!!
    for(let x of s){
        //키 값이 이미 있으면 +1, 없으면 1
        sH.set(x, sH.get(x)+1 || 1);
    }
    let max = Number.MIN_SAFE_INTEGER;

    //이제 카운팅된 스트링 해쉬맵을 돌며 최대값을 찾는다.
    //max와 비교하여 더 큰 값이 나올 때 마다 max를 업데이트하고
    //해당 키를 answer에 넣는다.
    for(let [key,val] of sH){
        if(val>max){
            max = val;
            answer=key;
        }
    }

    console.log(sH);

    // let sArray = s.split("");
    // sArray.sort();
    // console.log(sArray);

    // let count = 0;
    // let acc = 0;
    // for(let i = 0; i<sArray.length; i++){
    //     if(sArray[i] === sArray[i+1]){
    //         count++;
    //     }else if(count>acc){
    //         acc = count;
    //         answer = sArray[i];
    //         count = 0;
    //     }else{
    //         count = 0;
    //     }
    // }

    return answer;
}

console.log(solution("BACBACCACCBDEDE"));