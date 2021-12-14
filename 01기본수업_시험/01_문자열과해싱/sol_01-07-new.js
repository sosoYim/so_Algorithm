

function solution(s1, s2){
    let answer = "YES";
    
    let sh = new Map();

    if(s1.length !== s2.length){
        answer = "NO";
        return answer;
    }

    //let sh2 = new Map();
    for(let x of s1){
        sh.set(x, sh.get(x)+1 || 1);
    }
    for(let x of s2){
        if(!sh.has(x) || sh.get(x)===0){
            answer = "NO";
            return answer;
        }else sh.set(x, sh.get(x)-1);

    }

    // for(let [key,value] of sh){
    //     if(sh[key]!==sh2[key]){
    //         answer = "NO";
    //         return;
    //     }
    // }

    return answer;
}
console.log(solution("AbaAeCe", "baeeACA"));
console.log(solution("abaCC", "Caaab"));