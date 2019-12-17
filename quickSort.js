function findPivotIndex(arr, start=0, end=arr.length){
    let pivotValue= arr[start];
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

    swap(arr, start, pivotIndex);
    console.log(arr);

    return pivotIndex;

}

function quickSort(arr, left=0, right=arr.length){
    let pivotIndex = findPivotIndex(arr);
    if(left < right){
        let pivotLeft =quickSort(arr.slice(0, pivotIndex));
        let pivotRight= quickSort(arr.slice(pivotIndex+1));

    }
    return arr;
}




console.log(findPivotIndex([4,1,3,5,7,9,8]));

