class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val){
        let node = new Node(val);
        if(this.size === 0){
            this.first = node;
            this.last = node;
        }else{
            this.last.next = node;
            this.last = node;
        }
        this.size++;
        return this;
    }

    pop(){
        if(this.size === 0 )return null;
        let poppedNode = this.first;
        if(this.size === 1){
            this.first = null;
            this.last = null;
        } else {
            this.first = poppedNode.next ;
        }

        this.size --;
        return poppedNode.val;
    }

    print(){
        var arr = [];
        var current = this.first;
        while(current){
            arr.push(current.val)
            current = current.next;
        }
        console.log(arr);
    }
}

let queue = new Queue();
queue.push("First");
queue.push("Second");
queue.push("Third");

console.log(queue.print());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());

