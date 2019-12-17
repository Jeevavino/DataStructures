
function maxSubArray(arr, limit){

    let max = -Infinity;
    for(let i = 0 ; i < arr.length - limit+1; i++){
        let tempSub = 0;
        for (let j=0; j<limit; j++){
            tempSub += arr[i+j];
        }
        max= Math.max(tempSub,max);
    }
    return max;
}

console.log(maxSubArray([1,1,2,3,3,5,6,9], 3));

