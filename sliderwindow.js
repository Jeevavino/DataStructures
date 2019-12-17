function maxSubArray(arr, num){
   
    var max = -Infinity;
    var iCounter = arr.length - num+1;
    for(var i = 0; i< iCounter; i++){
        var temp = 0;
       // var counter = i + num-1;
        for(var j = i; j <= num-1 ; j++){
            temp += arr[j];
        }

        if (temp > max){
            max = temp;
        }
    }
    return max;
}

console.log(maxSubArray([5,1,3,4,6,2,4],3));

//[5,1,3,4,6,2,4] , 3