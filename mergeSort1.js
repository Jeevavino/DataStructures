

function merge(arr1,arr2){
    let i = 0;
    let j = 0;
    let resut = [];
    while(i < arr1.length && j < arr2.length){
        if(arr2[j]>arr1[i]){
            resut.push(arr1[i]);
            i++;
        }else{
            resut.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length){
        resut.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        resut.push(arr2[j]);
        j++;
    }

    return resut;
}

function mergeSort(arr){
    if(arr.length === 1){
        return arr;
    }
    let middle = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,middle));
    let right = mergeSort(arr.slice(middle));
    return merge(left,right);

}

console.log(merge([1,3,5], [2,4,6,7]));
console.log(mergeSort([1,3,5,2,4,6,7]));