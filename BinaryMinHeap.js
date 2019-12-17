class BinaryHeap {
    constructor(){
        this.values = [8,10,33,44];
    }

    insert(val){
        this.values.push(val);
        let index = this.values.length -1;
        const element = this.values[index];
        this.bubbleup(index, element);
    }
    bubbleup(index, element){
        while(index > 0){
            let parentIdx = Math.floor((index-1)/2);
            if(element < this.values[parentIdx]){
                let temp = this.values[parentIdx];
                this.values[parentIdx] = element;
                this.values[index] = temp;
                index = parentIdx;
            }else {
                break;
            }
        }
    }

    dequeue(){
        const min = this.values[0];
        const element =this.values.pop();
        if(this.values.length > 0){
            this.values[0] = element;
            this.sinkDown();
        }
        return min;
    }
    
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let swap = null;
            let leftchild, rightChild;
            let leftChildidx = 2*idx+1;
            let rightChildidx = 2*idx+2;
            if(leftChildidx < length){
                 leftchild = this.values[leftChildidx];
                if(leftchild < element){
                    swap = leftChildidx;
                }
            }
    
            if(rightChildidx < length) {
                    rightChild = this.values[rightChildidx];
                if((swap === null && rightChild < element)|| (swap !== null && rightChild < leftchild)){
                    swap = rightChildidx;
                }
            }
    
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
       
    }
}

let heap = new BinaryHeap();
heap.insert(55);
heap.insert(60);
heap.insert(22);
heap.insert(1);
console.log(heap);
heap.dequeue();
console.log(heap);
heap.dequeue();
console.log(heap);
heap.dequeue();
console.log(heap);
 //       60

    //20          55

//10 8             19, 34

