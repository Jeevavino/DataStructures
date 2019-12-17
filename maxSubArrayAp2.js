function maxSubArray(arr, limit){
    let currentMax = 0;
    for(let i=0; i< limit; i++){
        currentMax += arr[i];
    }
    let tempSub = 0;
    for(let j=limit; j< arr.length; j++){   
        tempSub = currentMax - arr[j-limit]+arr[j]; 
        currentMax = Math.max(tempSub,currentMax);
    }
    return currentMax;
}



