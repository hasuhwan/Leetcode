/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    if(num===0){
        return true;
    }

    const temp=String(num);
    console.log(temp[temp.length-1])
    if(temp[temp.length-1]==="0"){
        return false;
    }
    return true;
};