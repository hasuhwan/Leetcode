/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const idx=digits.reduce((acc,cur,i)=>{
        if(cur!==9){
            return i;
        }else{
            return acc;
        }
    },-1);
    if(idx===-1){
    for(let i=0; i<digits.length; i++){
        digits[i]=0;
    }    
        digits.unshift(1);
    }else{
        for(let i=idx+1; i<digits.length; i++){
            digits[i]=0;
        }
        digits[idx]+=1;
    }
    return digits;
    
};