class BinaryHeap {
    constructor(){
        this.values = [34,20,19,10,8];
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
            if(element > this.values[parentIdx]){
                let temp = this.values[parentIdx]
                this.values[parentIdx] = element;
                this.values[index] = temp;
                index = parentIdx;
            }else {
                break;
            }
        }
    }
}

let heap = new BinaryHeap();
heap.insert(55);
heap.insert(60);
heap.insert(22);
heap.insert(1);
console.log(heap);

 //       60

    //20          55

//10 8             19, 34

