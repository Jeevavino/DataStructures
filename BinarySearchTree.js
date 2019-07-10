class Node{
    constructor(val){
        this.left = null;
        this.right = null;
        this.val = val;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insertNode(currentNode, newNode){
        if(newNode.val < currentNode.val){
            if(currentNode.left !== null){
                this.insertNode(currentNode.left, newNode);
            }else {
                currentNode.left = newNode;
            }
        } else {
            if(currentNode.right !== null){
                this.insertNode(currentNode.right, newNode);
            }else {
                currentNode.right = newNode;
            }
        }

    };

    insert(val){
        let newNode = new Node(val);
        if(!this.root){
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    find(val){
        return this.searchNode(this.root, val);
    }
    searchNode(currentNode, val){
        if(currentNode === null){
            return false;
        }
        if(val < currentNode.val ){
            this.searchNode(currentNode.left, val);
        }else if(val > currentNode.val ){
            this.searchNode(currentNode.right, val);
        }else {
            return true;
        }
    }

    maxNode(){
        if(!this.root) return undefined;
        let currentNode = this.root;
        while(currentNode.right){
            currentNode = currentNode.right;
        }
        return currentNode.val;
    }

    minNode(){
        if(!this.root) return undefined;
        let currentNode = this.root;
        while(currentNode.left){
            currentNode = currentNode.left;
        }
        return currentNode.val;
    }

    DFSInOrder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.val);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

     BFS(){
        var node = this.root,
            data = [],
            queue = [];
        queue.push(node);

        while(queue.length){
           node = queue.shift();
           data.push(node.val);
           if(node.left) queue.push(node.left);
           if(node.right) queue.push(node.right);
        }
        return data;
    }

    BreathFirstSearch(){

    }
    
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(15);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.BFS());