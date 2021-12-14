function solution(n){
    DFS(n);
}

//재귀는 무조건 if else 로 풀자!!!!!!!!!!
//스택프레임

function DFS(v){
    if(v===0) return;
    else{
        //console.log(v); 이곳에 적었으면 3 2 1 출력. 스택프레임에 쌓는 과정에서 먼저 실행하기 때문
        DFS(v-1); //재귀 호출이 멈추고 백트래킹시 이곳으로 온다.
        console.log(v); //1 2 3 출력. 백트래킹 중에 실행되기 때문
    }
}


console.log(solution(3));