//인접리스트 (인접행렬보다 훨씬 빠르다.)
//시작점을 잡고 그곳에서 갈 수 있는 인접 노드들을 구한다.
//한번 지나간 곳은 체크해두고 다시 가시 않는다.


function solution(n,edges){
    let answer=0;
    let graph=Array.from(Array(n+1), ()=>Array()); //1~n까지 행열을 잡기 위해 n+1길이로 설정
    let ch=Array.from({length:n+1},()=>0);

    for(let [a, b] of edges){ //방향 그래프
        graph[a].push(b); //인접리스트 만드는 중
    }
    console.log(graph);
    let path=[]; //패스를 눈으로 보기 위한 것 
    function DFS(v){
        if(v===n){
            console.log(path);
            answer++;
        }
        else{
            for(let nv of graph[v]){
                //v에서 갈 수 있는 애들
                if(ch[nv]===0){
                    ch[nv]=1;
                    path.push(nv);
                    DFS(nv);
                    ch[nv]=0;
                    path.pop();
                }
            }
        }
    }
    ch[1]=1;
    path.push(1);
    DFS(1);
    return answer;
}

console.log(solution(5, [[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]]));


/*
경로 탐색(인접행렬)
방향그래프가 주어지면 1번 정점에서 N번 정점으로 가는 모든 경로의 가지 수를 출력하는 프
로그램을 작성하세요. 아래 그래프에서 1번 정점에서 5번 정점으로 가는 가지 수는 
1 2 3 4 5
1 2 5
1 3 4 2 5
1 3 4 5
1 4 2 5
1 4 5
총 6 가지입니다. 
▣ 입력설명
매개변수 n에 정점의 수 N(1<=N<=20)주어집니다. 이차원 배열 edges에 간선의 정보가 주어
집니다.
▣ 출력설명
총 가지수를 반환합니다.
▣ 매개변수 형식 1 
5, [[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]] 
▣ 반환값 형식 1
6
입력설명 : [a, b]는 a정점에서 b정점으로 이동할 수 있다는 의미입니다.
*/