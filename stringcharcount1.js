
function isAlphaNumeric(char) {
    let code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
      return false;
    }
  return true;
}

function charCount(str){
    let charObj = {};
    for (let char of str){
            if(isAlphaNumeric(char)){
                charObj[char] ? charObj[char]++ : charObj[char] = 1;
            }
    }
    return charObj;

}

console.log(charCount("Hi I am bala"));