function naiveSearch(long, short){
    var count = 0;
    for(var i = 0; i< long.length; i++){
        for(var j = 0; j< long.length; j++){
            console.log(short[j],long[i+j])
            if(short[j] !== long[i+j]){
                break;
            }

            if(j === short.length -1){
                console.log("found one");
                count++;
            }
           
        }
    }
    return count;
}


naiveSearch("lorerelolderlolder", "lol")