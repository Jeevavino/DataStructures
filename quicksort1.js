function pivot(arr, start=0, end= arr.length){
    let pivot = arr[start];
    let swapIdx = 0;
    var swap = function (array, index1, index2) {
        var aux = array[index1];
        array[index1] = array[index2];
        array[index2] = aux;
    };

    for(let i=start+1;i < end; i++){
        if(pivot > arr[i]){
            swap(arr, swapIdx, i);
            swapIdx++;
        }
    }
    swap(arr, start, pivotIndex);
    console.log(arr);

    return pivotIndex;
}



function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            console.log(items);
            swap(items, i, j); //swap two elements
            console.log(items);
            i++;
            j--;
        }
    }
    return i;
}

function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

var items = [4,1,3,2,7,9,1]
console.log(partition(items,0, items.length-1));
//1,3,4,5,7,9,8


