/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
    let max=0;
    strs.forEach(el=>{
        if(!isNaN(el)){
            max=Math.max(max,Number(el));
        }else{
            max=Math.max(max,el.length)
        }
    })
    return max;
};