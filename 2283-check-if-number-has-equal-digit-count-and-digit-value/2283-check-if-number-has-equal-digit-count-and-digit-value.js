/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
    const obj={};
    for(let i=0; i<num.length; i++){
        obj[num[i]]=(obj[num[i]]||0)+1;
    }
    
    for(let i=0; i<num.length; i++){
        if(obj[i]===undefined){
            obj[i]=0;
            
        }
        if(obj[i]!==Number(num[i])){
            return false;
        }
    }
    return true;
    
};