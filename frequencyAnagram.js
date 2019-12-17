function isAnagram(str1,str2){

    let strObj1= {};
    let strObj2 = {};
    
    for(let char of str1){
        strObj1[char] ? strObj1[char]++:  strObj1[char] = 1;
    }
    for(let char of str2){
        strObj2[char] ? strObj2[char]++: strObj2[char] = 1;
    }

    for(let key in strObj2){
        if(!(strObj1.hasOwnProperty(key))){
            return false;
        }
        if(strObj1[key] !== strObj2[key]){
            return false;
        }
       
    }

    return true;
}

function isAnagramOne(str1,str2){

    let strObj1= {};
    
    for(let char of str1){
        strObj1[char] ? strObj1[char]++:  strObj1[char] = 1;
    }
    if(!0){
        console.log('not zero');
    }
    if(0){
        console.log('zero');
    }
    if(1){
        console.log('one');
    }
    if(!1){
        console.log('not one');
    }

   
    for(let char of str2){
        console.log(strObj1[char]);
        if(!strObj1[char]){
            return false;
        } else {
            strObj1[char]--;
        }
        console.log(strObj1);
    }

    return true;
}

console.log(isAnagramOne('cinema', 'icieman'));