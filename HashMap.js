class HashMap {
    constructor(size = 2){
        this.keyMap =new Array(size);
    }
    
    
    _hash(key){
        let total = 0;
        let primeNumber = 31;
        for(let i = 0; i < Math.min(key.length, 100) ;i++ ){
            let char = key[i];
            let code = char.charCodeAt(0)-96;
            total = (total * code +primeNumber) % this.keyMap.length;
        }
        return total;
    }

    put(key, value){
        let hashValue = this._hash(key);
        if(!this.keyMap[hashValue]){
            this.keyMap[hashValue] = [];
        }
        this.keyMap[hashValue].push([key, value]);
    }

    get(key){
        let hashValue = this._hash(key);
        if(this.keyMap[hashValue]){
            for (let i = 0; i < this.keyMap[hashValue].length; i++){
                if(this.keyMap[hashValue][i][0] === key){
                    return this.keyMap[hashValue][i][1];
                }
            }
        }
        return undefined;
    }

    keys(){
        let keys = [];
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    keys.push(this.keyMap[i][j][0]);
                }
            }
        }
        return keys;
    }

    values(){
        let values = [];
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    values.push(this.keyMap[i][j][1]);
                }
            }
        }
        return values;
    }
}

let map = new HashMap();
map.put("bala", "test");
map.put("vino", "jeeva");

console.log(map.keys());

map.keys().forEach(function(key){
    console.log(map.get(key));
  })
