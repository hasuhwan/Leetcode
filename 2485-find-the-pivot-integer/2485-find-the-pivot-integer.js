/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    const sumArr=new Array(n+1).fill().map((_,idx)=>idx);
    for(let i=1; i<sumArr.length; i++){
        sumArr[i]+=sumArr[i-1];
    }
    for(let i=1; i<sumArr.length; i++){
        if(sumArr[i]===sumArr[n]-sumArr[i]+i){
            return i;
        }
    }
    return -1;
};