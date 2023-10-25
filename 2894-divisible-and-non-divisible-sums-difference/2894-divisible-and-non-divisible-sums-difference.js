/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    const total=Array.from({length:n},(_,idx)=>idx+1).reduce((acc,cur)=>acc+cur,0);
    const div=Math.floor(n/m);
    let minus=0;
    for(let i=1; i<=div; i++){
        minus+=m*i;
    }
    return total-2*minus;
};