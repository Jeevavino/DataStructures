function bubbleSort(arr){
    var noSwaps;
    for (let i = arr.length; i >0; i--){
        noSwaps = true;
        for (let j = 0; j < i-1; j++){
            console.log(arr[j] , arr[j + 1]);
            if(arr[j] > arr[j+1] ){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps){
            break;
        }
    }
    return arr;
}

console.log(bubbleSort([1,3,7,3,4,6,10,9,32,13,15,19,23]));
