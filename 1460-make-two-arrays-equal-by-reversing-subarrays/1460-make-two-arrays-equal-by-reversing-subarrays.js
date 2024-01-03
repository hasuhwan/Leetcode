/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    const map=new Map();
    target.forEach(el=>{
        map.set(el,(map.get(el)||0)+1);
    });
    for(let el of arr){
        if(!map.has(el)){
            return false;
        }
        map.set(el,map.get(el)-1);
    }
    for(let val of map.values()){
        if(val!==0){
            return false;
        }
    }
    return true;
};