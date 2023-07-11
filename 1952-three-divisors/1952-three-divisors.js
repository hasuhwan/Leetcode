/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
    const val=Math.sqrt(n);
    if(val!==parseInt(val)){
        return false;
    }
    if(val===1){
        return false;
    }
    if(val===2){
        return true;
    }
    for(let i=2; i<=Math.sqrt(val); i++){
        if(val%i===0){
            return false;
        }
    }
    return true;
};