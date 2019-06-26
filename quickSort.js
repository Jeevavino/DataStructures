function findPivotIndex(arr, start=0, end=arr.length){
    let pivotValue= arr[start]
    let pivotIndex =0;
    var swap = function (array, index1, index2) {
        var aux = array[index1];
        array[index1] = array[index2];
        array[index2] = aux;
    };

    for(let i = start+1; i<end; i++){
        if(pivotValue > arr[i]){
            pivotIndex++;
            swap(arr, pivotIndex, i);
           
            console.log(arr);
        }
    }
//
    swap(arr, start, pivotIndex);
    console.log(arr);

    return pivotIndex;

}


console.log(findPivotIndex([4,3,1,6,2]))



