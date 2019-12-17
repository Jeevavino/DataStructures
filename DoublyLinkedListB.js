class Node {
    constructor(val){
        this.next = null;
        this.prev = null;
        this.val = val;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }

    }
}

var list = new DoublyLinkedList();
list.push("Harry");
list.push("Ron");
list.push("Hermione");
console.log(list);