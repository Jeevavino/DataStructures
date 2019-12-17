function selectionSort(arr){
 
    const swap = (arr, i, lowest) =>
        [arr[i],arr[lowest]] = [arr[lowest],arr[i]];

    let lowest;
    for(let i=0; i < arr.length; i++){
        lowest = i;
        for(let j=i+1; j < arr.length; j++){
            console.log(arr[lowest], arr[j]);
            if(arr[lowest] > arr[j]){
                lowest = j;
            }
        }
        if(i !== lowest){
            swap(arr,i,lowest);
        }
        
    }
    return arr;
}


console.log(selectionSort([18,4,2,6,3,7,8]));


