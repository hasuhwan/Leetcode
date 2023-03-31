/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reverse=String(x).split("").reverse();
    if(reverse[reverse.length-1]==="-"){
        const minus=reverse.pop();
reverse=[minus,...reverse];
    }
    reverse=Number(reverse.join(""));
    return reverse<Math.pow(-2,31)||reverse>Math.pow(2,31)-1?0:reverse
};