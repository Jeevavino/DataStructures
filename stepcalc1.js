
console.log(blocks('1*60=2.33,X*30' , 120));
console.log(blocksWithoutCharge('1*60=2.33,X*30' , 120));
console.log(rate('1*60=2.33,X*30' , 120, 0.8000));
console.log(blockRate('1*60=2.33,X*30' , 120, 0.8000));
//console.log(subTotal());
console.log(checkRate('1*60=2.33,X*30', 120, 0.8000, 1.37988));
console.log(execCheckRate(checkRate('1*60=2.33,X*30', 120, 0.8000, 1.37988)));
console.log(add());

console.log(blocks('1*10240=0.00390625,X*1024' , 20480, 'GPRS'));
console.log(rate('1*10240=0.00390625,X*1024' , 20480, 0.000390625005821, 'GPRS'));
console.log(blockRate('1*10240=0.00390625,X*1024' , 20480, 0.000390625005821, 'GPRS'));
function add(){
    var blockRateArr = [0.800000011921, 1.600000023842]
    return blockRateArr.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);
}

function blocksWithoutCharge(userString, totalDuration){
    var i,
        blocksArr = blocks(userString, totalDuration),
        blocksWithoutChargeArr = [];
  
    for(i = 0; i < blocksArr.length; i++){
        blocksWithoutChargeArr[i] = blocksArr[i].split('=')[0]
    }

    return blocksWithoutChargeArr;
}

function  blocks(userString, duration){
    var i,
        usrAr = userString.split(','),
        xValue,
        blocksArr = [];

    for(i = 0; i < usrAr.length; i++){
            var currentDuration = parseInt(usrAr[i].split('*')[1]);
            if(usrAr[i].includes("X")){
                if(usrAr.length === 1){
                    xValue = duration/60;
                }else{
                    xValue = duration/currentDuration;
                }
                blocksArr[i] = usrAr[i].replace('X', Math.ceil(xValue));
                
            } else {
                duration = duration - currentDuration;
                blocksArr[i] = usrAr[i];
            }
    }

    return blocksArr;
}


function rate(userString, totalDuration, charge) {
    var i,
        currentCharge,
        blocksArr  = blocks(userString, totalDuration),
        firstDuration,
        currentDuration,
        blockCharge,
        rateArr = [];
        for(i = 0; i < blocksArr.length; i++){
            blockCharge = blocksArr[i].split('=')[1]; 
            currentDuration = parseInt(blocksArr[i].split('*')[1]);
            if(firstDuration === undefined){
                firstDuration  = currentDuration;
            }
            if(blockCharge !== undefined){
                currentCharge = (blockCharge / (firstDuration / currentDuration));
            }else {
                var divDuration = firstDuration / currentDuration;
                console.log("duv"+divDuration);
                currentCharge = (charge / divDuration);
            }
           rateArr[i] = currentCharge;
           
        }
        return rateArr;
}

function blockRate(userString, totalDuration, charge) {
    var i,
        blocksArr = blocks(userString, totalDuration),
        rateArr = rate(userString, totalDuration, charge),
        currentBlock,
        currentBLockRate,
        blockRateArr =[];

    for (i = 0; i < blocksArr.length; i++) {
        currentBlock = parseInt(blocksArr[i].split('*')[0]);
        blockRateArr[i] = currentBlock  *  rateArr[i];
    }

    return blockRateArr;
}


function subTotal(){
    var rateArr = rate();
    var subtotal =  rateArr.reduce((a, b) => a + b, 0);
    return subtotal;
}



function checkRate(userString, totalDuration, charge, currencyUnit){
    var i,
        blocksArr = blocks(userString, totalDuration),
        rateArr = rate(userString, totalDuration, charge),
        currentBlock,
        currentBLockRate,
        finalString = '(';

    for (i = 0; i < blocksArr.length; i++){
        currentBlock = parseInt(blocksArr[i].split('*')[0]);
        finalString = ( i !== blocksArr.length -1 ) ? finalString + (currentBlock + ' * ' + rateArr[i]) + ' + ' :  finalString + (currentBlock + ' * ' + rateArr[i]) + ')';
    }
   
    finalString = finalString + " / " + currencyUnit;

    return finalString;
   
}

function execCheckRate(formula){
        return new Function('return ' + formula)();
}