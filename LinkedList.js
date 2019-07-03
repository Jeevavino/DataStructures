class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head= null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = this.head;
        }else {
            this.tail.next =node;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        newTail.next = null;
        this.tail = newTail;
        this.length--;
        return newTail;
    }

    shift(){
        if(!this.head){
            return undefined;
        }
        let currentHead = this.head;
        let newHead = currentHead.next;
        this.head = newHead;
        this.length --;
        if(this.length === 0){
            this.tail =null;
        }
        return this;
    }

    unshift(val){
        if(!this.head) {
            return this.push(val);
        } else{
            let newNode = new Node(val);
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length){
            return null;
        }
        let current = this.head;
        let counter = 0;
        while (counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, val){
        let updateNode = this.get(index);
        if(updateNode){
            updateNode.val = val;
            return true;
        }

        return false;
    }

    insert(index, val){
        if(index === 0){
            return this.unshift(val);
        }
        if(index === this.length){
            return this.push(val);
        }  
        if(index < 0 || index > this.length){
            return false;
        }
        let newNode = new Node(val);
        let currentNode = this.get(index-1);
        let afterNode = currentNode.next;
        currentNode.next = newNode;
        newNode.next = afterNode;
        this.length++;
        return true;        
    }

    remove(index){
        if(index === this.length -1){
            return this.pop();
        }
        if(index < 0 || index > this.length){
            return undefined;
        }

        if(index == 0){
            return this.shift();
        }

        var foundNode = this.get(index -1);
        let toDeletNode = foundNode.next;
        let afterNode = toDeletNode.next ;
        foundNode.next = afterNode;
        
        this.length--;
        return toDeletNode;

    }

    print(){
        var arr = [];
        var current = this.head
        while(current){
            arr.push(current.val)
            current = current.next
        }
        console.log(arr);
    }
}


var list = new SinglyLinkedList()
list.push("HELLO");
list.push("GOODBYE");
list.push("!");
list.remove(1);
console.log(list.print());



