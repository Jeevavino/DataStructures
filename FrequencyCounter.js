
function frequencyCounterPattern (array1, array2) {

    let frequencyCounterOne = {};
    let frequencyCounterTwo = {};

    for(let char of array1){
        frequencyCounterOne[char] ? frequencyCounterOne[char]++ : frequencyCounterOne[char] = 1;
    }

    for(let char of array2){
        frequencyCounterTwo[char] ? frequencyCounterTwo[char]++ : frequencyCounterTwo[char] = 1;
    }

    for(let key in frequencyCounterOne){        
        
        if(!(frequencyCounterTwo.hasOwnProperty(Math.pow(key,2)))){
            return false;
        }
       
        if(frequencyCounterOne[key] !== frequencyCounterTwo[Math.pow(key,2)]){
            return false;
        }

    }

    return true;

}

console.log(frequencyCounterPattern([1,2,3], [9,1,4]));