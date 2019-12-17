class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor(){
        this.values = [];
    }

    insert(val, priority){
        let node = new Node(val, priority);
        this.values.push(node);
        let index = this.values.length -1;
        const element = this.values[index];
        this.bubbleup(index, element);
    }
    bubbleup(index, element){
        while(index > 0){
            let parentIdx = Math.floor((index-1)/2);
            let parent = this.values[parentIdx];
            if(element.priority < parent.priority){
                this.values[parentIdx] = element;
                this.values[index] = parent;
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
                if(leftchild.priority < element.priority){
                    swap = leftChildidx;
                }
            }
    
            if(rightChildidx < length) {
                    rightChild = this.values[rightChildidx];
                if((swap === null && rightChild.priority < element.priority)|| (swap !== null && rightChild.priority < leftchild.priority)){
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

let pq = new PriorityQueue();
pq.insert("Cold", 5);
pq.insert("fever", 4);
pq.insert("accident", 2);
pq.dequeue();
console.log(pq);
pq.dequeue();
console.log(pq);
pq.dequeue();
console.log(pq);
pq.dequeue();
console.log(pq);


 //       60

    //20          55

//10 8             19, 34

