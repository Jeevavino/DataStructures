function mergeSort(arr){
    if(arr.length ==1)
         return arr;
    let middle = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, middle));
    let right = mergeSort(arr.slice(middle));

    return merge(left, right);

}

function merge(leftArr, rightArr){
    let left = 0;
    let right = 0;
    let results= [];
    while (left < leftArr.length && right < rightArr.length){
        if (leftArr[left] < rightArr[right]){
            results.push(leftArr[left]);
            left++;
        }else {
            results.push(rightArr[right]);
            right++;
        }
    }

    console.log(left,leftArr.length, right, rightArr.length);
    while(left < leftArr.length){
        results.push(leftArr[left]);
        left++;
    }

    while(right < rightArr.length){
        results.push(rightArr[right]);
        right++;
    }

    return results;

}
console.log(mergeSort([4,2,3,1,2,5,8]));
