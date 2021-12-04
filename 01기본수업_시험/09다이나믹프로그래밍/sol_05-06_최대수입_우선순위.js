//아주 좋은 문제! 응용 자주 된다! 매우 중요**************************
//!!우선순위 문제!!
/*SOL
날짜 순으로 내림차순 정렬한다.
d-day가 가장 큰 날짜를 maxHeap에 넣고, 최대값을 뽑는다.
다음으로 큰 날짜를 maxHeap에 넣고 최대값을 뽑는다.
...
1일날 의 값들을 maxHeap에 넣고 최대값을 뽑는다.
*/

function solution(nums){
    let answer=0;
    let maxH = new maxHeap();
    nums = nums.sort((a,b)=> b[1] - a[1]);
    let maxd = nums[0][1];
    //반복문 증가시 i 인덱스를 공유하기 위해
    let i =0;
    for(let day=maxd; day>=1; day--){
        for( ; i<nums.length; i++){
            if(nums[i][1]<day) break;
            maxH.insert(nums[i][0]);
        }
        if(maxH.size()>0){
            answer+=maxH.get();
        }
    }
    
    //console.log((undefined||0) + 1);

    return answer;
}

class maxHeap{
    constructor(){
        this.heap=[];
        this.heap.push(Number.MAX_SAFE_INTEGER);
    }

    insert(val){
        this.heap.push(val);
        this.upheap(this.heap.length-1); //index pos
    }

    upheap(pos){
        let tmp=this.heap[pos]; //비교할 값 tmp에 담아놓기
        while(tmp>this.heap[parseInt(pos/2)]){ //자식이 부모보다 작을 때 까지
            this.heap[pos] = this.heap[parseInt(pos/2)]; //더 작은 수의 부모를 자식 위치로 복사
            pos=parseInt(pos/2); //포인터 위치를 부모 자리로
        }
        this.heap[pos] = tmp;
    }

    get(){
        //최대값 반환 함수
        //루트의 값을 뽑아 반환
        //마지막 노드를 pop 하여 비어있는 루트자리로 놓기
        //downheap()
        if(this.heap.length===2){
            return this.heap.pop();
        }
        let res = this.heap[1];
        this.heap[1]=this.heap.pop(); //배열 길이가 하나 줄어듬
        this.downheap(1, this.heap.length-1);
        return res;
    }

    downheap(pos, len){
        //pos : 비교 중심 자리(루트에서 시작)
        //len : 마지막 자료 위치
        //자신의 둘 중에 큰 값과 비교
        //현재 노드가 자신 중 큰 값보다 크면 해당 자리에 앉기.
        //배열 마지막 자리의 부모까지만 갈 수 있다. len/2 (마지막 부모)
        let tmp=this.heap[pos];
        let child;
        while(pos<=parseInt(len/2)){
            child = pos*2;
            if(child<len && this.heap[child]<this.heap[child+1]) child++;
            if(tmp>=this.heap[child]) break;
            this.heap[pos]=this.heap[child];
            pos=child;
        }
        this.heap[pos] = tmp;
    }

    size(){
        return this.heap.length-1; //0 자리에 임의의 큰 수를 넣었으므로 -1 해줘야 길이가 됨.
    }

    show(){
        for(let i=1; i<=this.size(); i++){
            console.log(this.heap[i]);
        }
        return true;
    }


} 

console.log(solution([[50, 2], [20, 1], [40, 2], [60, 3], [30, 3], [30, 1]]));

/*
최대 수입 스케쥴
현수는 유명한 강연자이다. N개이 기업에서 강연 요청을 해왔다. 각 기업은 D일 안에 와서 강
연을 해 주면 M만큼의 강연료를 주기로 했다.
각 기업이 요청한 D와 M의 정보를 바탕으로 가장 많을 돈을 벌 수 있도록 강연 스케쥴을 짜
야 한다. 
단 강연의 특성상 현수는 하루에 하나의 기업에서만 강연을 할 수 있다.
▣ 입력설명
매개변수 nums에 N(1<=N<=10,000)개의 기업이 요청한 강연 M, D가 차례로 주어집니다.
▣ 출력설명
현수가 최대로 벌 수 있는 수입을 반환합니다.
▣ 매개변수 형식 1 
[[50, 2], [20, 1], [40, 2], [60, 3], [30, 3], [30, 1]]
▣ 반환값 형식 1
150
▣ 매개변수 형식 2 
[[50, 2], [40, 2], [20, 1], [10, 1]]
▣ 반환값 형식 2
90
입력설명 :
현수의 스케쥴의 시작은 1일부터 출발합니다.
[[50, 2], [20, 1], [40, 2], [60, 3], [30, 3], [30, 1]]이면 첫 번째 기업의 강연정보인 
[50, 2]는 2일 안에(2일포함) 와서 강연을 해주면 50의 강연료를 주겠다는 의미입니다.
네 번째 정보인 [60, 3]은 3일 안에 와서 강연을 해주면 60의 강연료를 주겠다는 의미입니다. 
즉 현수가 1일, 2일, 3일 중 아무 날에 가서 강연을 하면 60의 강연료를 받습니다.
*/