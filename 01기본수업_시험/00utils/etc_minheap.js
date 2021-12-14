
function solution(nums){
    let mh = new minheap();
    let test = Array.from({length:9}, (e,i)=>mh.insert(i+1));
    mh.insert(3);
    mh.show();
    console.log(mh.get());
    mh.show();
    console.log(mh.get());
    mh.show();
}

class minheap{

    constructor(){
        this.heap = [];
        this.heap.push(Number.MIN_SAFE_INTEGER);
    }

    insert(val){
        this.heap.push(val);
        this.upheap(this.heap.length-1);
    }

    upheap(pos){
        let tmp = this.heap[pos];
        while(tmp < this.heap[parseInt(pos/2)]){
            this.heap[pos] = this.heap[parseInt(pos/2)];
            pos=parseInt(pos/2);
        }
        this.heap[pos] = tmp;
    }

    get(){
        if(this.heap.length===2) return this.heap.pop();
        let res = this.heap[1];
        this.heap[1] = this.heap.pop();
        this.downheap(1, this.heap.length-1);
        return res;
    }

    downheap(pos, len){
        let tmp = this.heap[pos];
        let child;
        while(pos <= parseInt(len/2)){
            child = pos*2;
            if(child<=len && this.heap[child]>this.heap[child+1]) child++;
            if(tmp<=this.heap[child]) break;
            this.heap[pos] = this.heap[child];
            pos = child;
        }
        this.heap[pos] = tmp; //조건에 맞는 자리에 안착!
    }

    size(){
        this.heap.length-1;
    }

    show(){
        let rst = "";
        for(let i=1; i<this.heap.length; i++){
            rst += this.heap[i] + " "
        }
        console.log(rst);
    }
}

solution();