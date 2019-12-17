class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack {
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
        }else {
            let temp  = this.first;
            this.first = node;
            node.next = temp;
        }
        this.size++;
        return this;
    }
    pop(){
        if(this.size === 0 ) return null;
        let first = this.first;
        if(this.size === 1){
            this.first = null;
            this.last = null;
        }else{
            this.first = first.next;
        }
       
        this.size--;
        return first.val;
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

let newStack = new Stack();
newStack.push("First");
newStack.push("Second");
newStack.push("Third");

console.log(newStack.print());
console.log(newStack.pop());
console.log(newStack.pop());
console.log(newStack.pop());
console.log(newStack.pop());

