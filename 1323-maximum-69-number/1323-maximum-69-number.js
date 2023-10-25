/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    const arr=String(num).split("");
    const idx=arr.indexOf("6");
    if(idx!==-1){
        arr[idx]="9";
    }
    return Number(arr.join(""));
};