//스택 프레임에 스택이 어떻게 굴러가는지 잘 알아야 한다!!!!

function solution(){
    DFS(1);
}

/*
전위순 이진 트리 방문하기
*/

function DFS(v){
    if(v>7) return;
    else{
        DFS(v*2);
        console.log(v); 
        DFS(v*2+1);
    }
}


console.log(solution());