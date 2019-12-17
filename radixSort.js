function maxDigits(num){
    return  Math.ceil(Math.log10(num + 1));
}

function findNumber(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
    //return  Math.floor(Math.abs(num)/Math.pow(10,i))% 10;
}

function radixSort(arr){
    let digitBuckets = [];
    let maxCount = 0;
    for(let i = 0; i < arr.length; i++){
        maxCount= Math.max(maxCount, maxDigits(arr[i]));
    }
    console.log(maxCount);
    
    for (let j= 0; j < maxCount; j++){
        digitBuckets = Array.from({length:10}, ()=> []);
        for(let k=0; k< arr.length; k++){
            digitBuckets[findNumber(arr[k],j)].push(arr[k]);
        }
       console.log(digitBuckets);
        arr= [].concat(...digitBuckets);
        console.log(arr);
    }

    return arr;

}

console.log(radixSort([1,25432,564,3, 2342]));