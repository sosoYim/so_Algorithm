//문자열의 앞 뒤에서 좁혀오며 비교하자
function solution(s){
    let lt = 0; 
    let rt = s.length -1;
    let answer = "";
    while(lt < rt){
        if(s[lt]!==s[rt]){
            let ltSub = s.substring(lt,rt);
            let rtSub = s.substring(lt+1, rt+1);
            console.log(`${ltSub} : ${rtSub}`);
            //rt글자를 지울 것인가 lt글자를 지울 것인다.
            if(ltSub === ltSub.split("").reverse().join("")) {
                s.split(rt,1);
            }else if(rtSub === rtSub.split("").reverse().join("")){
                s.split(lt,1);
            }else{
                //한번 지운걸로 회문 안됨
                answer = "NO";
            }
            break;
        }else{
            lt++;
            rt--;
        }
    }
    return answer || "YES";
}

console.log(solution("abcabbakcba"));
console.log(solution("abcacbakcba"));