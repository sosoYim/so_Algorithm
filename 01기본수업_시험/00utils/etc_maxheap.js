
function solution(nums){
    let answer;
    let maxH = new maxHeap();
    for(let x of nums){
        maxH.insert(x);
    }
    while(maxH.size()>1){
        let a = maxH.get();
        let b = maxH.get();
        if(a!==b) maxH.insert(a-b);
    }
    if(maxH.size()===0) answer=0;
    else answer=maxH.get();
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
        this.heap[1]=this.heap.pop(); //배열 끝 노드를 뽑아서 1자리에 둠
        this.downheap(1, this.heap.length-1); //1???
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

console.log(solution([5,4,3,6,7,2,9]));

//input
//[5,4,3,6,7,2,9]