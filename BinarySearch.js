function BinarySearch(arr, criteria){
    var start = 0;
    var end = arr.length -1;
    var middle = Math.floor((start+end)/2);
    while(arr[middle] !== criteria && start<=end){
        if(criteria > arr[middle]){
            start = middle +1;
        }else if(criteria < arr[middle]){
            end = middle -1;
        }
        middle = Math.floor((start+end)/2);
    }
    return arr[middle] === criteria ? middle : -1;
}

console.log(BinarySearch([1,3,5,6,7,9,12,16], 8));
