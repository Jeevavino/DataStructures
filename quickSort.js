function findPivotIndex(arr, start=0, end=arr.length-1){
    let pivotValue= arr[0]
    let pivotIndex =0;
    var swap = function (array, index1, index2) {
        var aux = array[index1];
        array[index1] = array[index2];
        array[index2] = aux;
    };

    for(let i = start+1; i<end; i++){
        if(pivotValue > arr[i]){
            
            swap(arr, pivotIndex, i);
            pivotIndex++;
            console.log(arr);
        }
    }
//console.log(arr);
    swap(arr, 0, pivotIndex);

    return pivotIndex;

}


console.log(findPivotIndex([4,3,1,6,2]))

3,1,2,4,6

