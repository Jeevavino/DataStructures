

/*console.log(blocks('X*10240', 2048000, 'GPRS'));
console.log(blocks('X*60', 120, 'AIR'));
console.log(blocks('1*60=2.33,1*30, X*30' , 180, 'AIR'));
console.log(rate('X*1' , 120, 0.070000000298, 'AIR'));
console.log(blockRate('X*1' , 120, 0.070000000298, 'AIR'));


console.log('grps start');
console.log(blocks('1*10240=0.00390625,X*1024' , 20480, 'GPRS'));
console.log(rate('1*10240=0.00390625,X*1024' , 20480, 0.000390625005821, 'GPRS'));
console.log(blockRate('1*10240=0.00390625,X*1024' , 20480, 0.000390625005821, 'GPRS'));
console.log(checkRate('1*10240=0.00390625,X*1024' , 20480, 0.000390625005821, 1.3701, 'GPRS'));
console.log(execCheckRate(checkRate('1*10240=0.00390625,X*1024' , 20480, 0.000390625005821, 1.3701, 'GPRS')));


console.log('Voice Start 23');
console.log(blocks('X*1 ' , 123, 'AIR'));
console.log(rate('X*1' , 123, 0.5, 'AIR'));
console.log(blockRate('X*1' , 123, 0.5, 'AIR'));
console.log(checkRate('X*1' , 123, 0.5, 1.3701, 'AIR', 0.35));
console.log(execCheckRate(checkRate('X*1' , 123, 0.5, 1.3701, 'AIR', 0.35)));
console.log(testExpo());

console.log('Voice Start 24');
console.log(blocks('X*60 ' , 123, 'AIR'));
console.log(rate('X*60' , 123, 0.899999976158, 'AIR'));
console.log(blockRate('X*60' , 123, 0.899999976158, 'AIR'));
console.log(checkRate('X*60' , 123, 0.899999976158, 1.2382, 'AIR', 0.35));
console.log(execCheckRate(checkRate('X*60' , 123, 0.899999976158, 1.2382, 'AIR', 0.35)));
console.log(testExpo());

*/


console.log('grps start');
console.log(blocks('30*1024=0.000632,170*1024=0.000443,X*1024' , 20480000, 'GPRS'));
console.log(rate('30*1024=0.000632,170*1024=0.000443,X*1024' , 20480000, 0.000315999990562, 'GPRS'));
console.log(blockRate('30*1024=0.000632,170*1024=0.000443,X*1024' , 20480000, 0.000315999990562, 'GPRS'));
console.log(checkRate('30*1024=0.000632,170*1024=0.000443,X*1024' , 20480000, 0.000315999990562, 2.0279, 'GPRS', 0));
console.log(execCheckRate(checkRate('30*1024=0.000632,170*1024=0.000443,X*1024' , 20480000, 0.000315999990562, 2.0279, 'GPRS', 0)));


/**
 console.log('grps start');
console.log(blocks('30*1024=0.000632,170*1024=0.000443,X*1024' , 20480000, 'GPRS'));
console.log(rate('30*1024=0.000632,170*1024=0.000443,X*1024' , 20480000, 0.000315999990562, 'GPRS'));
console.log(blockRate('30*1024=0.000632,170*1024=0.000443,X*1024' , 20480000, 0.000315999990562, 'GPRS'));
console.log(checkRate('30*1024=0.000632,170*1024=0.000443,X*1024' , 20480000, 0.000315999990562, 2.0279, 'GPRS', 0));
console.log(execCheckRate(checkRate('30*1024=0.000632,170*1024=0.000443,X*1024' , 20480000, 0.000315999990562, 2.0279, 'GPRS', 0)));
 * 
 *  ;
console.log(rate('X*1024' , 20480, 0.0000079999999798, 'GPRS'));
console.log(blockRate('X*1024' , 20480, 0.0000079999999798, 'GPRS')); */


function testExpo(){
    var number = 3.5E-1;
    console.log(number.toPrecision());
}

function blocksWithoutCharge(userString, totalDuration, blockType){
    var i,
        blocksArr = blocks(userString, totalDuration, blockType),
        blocksWithoutChargeArr = [];
  
    for(i = 0; i < blocksArr.length; i++){
        blocksWithoutChargeArr[i] = blocksArr[i].split('=')[0]
    }

    return blocksWithoutChargeArr;
}

function  blocks(userString, duration, blockType){
    var i,
        usrAr = userString.split(','),
        xValue,
        blocksArr = [];

    for(i = 0; i < usrAr.length; i++){
            var currentDuration = parseInt(usrAr[i].split('*')[1]); 
            var currentBlockString = parseInt(usrAr[i].split('*')[0]);
            var fixedDuration = parseInt(usrAr[i].split('#')[1]);
            usrAr[i] = usrAr[i].toUpperCase();

            if(fixedDuration !== undefined){
                if(duration < fixedDuration){
                    var replaceString = parseInt(usrAr[i].split('*')[0]);
                    blocksArr[i] = usrAr[i].replace(replaceString, 0);
                    break;
                }
            } 
            
            if(usrAr[i].includes("X")){
                if(usrAr.length === 1){
                    xValue = duration/currentDuration;
                }else{
                    xValue = duration/currentDuration;
                }
                xValue = xValue  < 0 ? 0 : xValue;
                blocksArr[i] = usrAr[i].replace('X', Math.ceil(xValue));
                
            } else {
                currentDuration =  currentDuration * currentBlockString;
                duration = duration - currentDuration;
                blocksArr[i] = usrAr[i];
            }
    }

    return blocksArr;
}

function rate(userString, totalDuration, charge, blockType) {
    var i,
        currentCharge,
        blocksArr  = blocks(userString, totalDuration, blockType),
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
                if(blockType === 'GPRS'){
                    currentCharge = charge;
                } else {
                    currentCharge = (charge / (60 / currentDuration));
                }
               
            }
           rateArr[i] = currentCharge;
           
        }
        return rateArr;
}

function blockRate(userString, totalDuration, charge, blockType) {
    var i,
        blocksArr = blocks(userString, totalDuration, blockType),
        rateArr = rate(userString, totalDuration, charge,  blockType),
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



function checkRate(userString, totalDuration, charge, currencyUnit, blockType, accessFee){
    var i,
        blocksArr = blocks(userString, totalDuration, blockType),
        rateArr = rate(userString, totalDuration, charge, blockType),
        currentBlock,
        currentBLockRate,
        finalString = '((';

    for (i = 0; i < blocksArr.length; i++){
        currentBlock = parseInt(blocksArr[i].split('*')[0]);
        finalString = ( i !== blocksArr.length -1 ) ? finalString + (currentBlock + ' * ' + rateArr[i]) + ' + ' :  finalString + (currentBlock + ' * ' + rateArr[i]) + ')';
    }
    finalString = finalString + '+' + accessFee+ ')';
    finalString = finalString + " / " + currencyUnit ;
   
    return finalString;
   
}

function execCheckRate(formula){
        return new Function('return ' + formula)();
}