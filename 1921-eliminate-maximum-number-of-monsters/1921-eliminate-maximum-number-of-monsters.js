/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function(dist, speed) {
    const sorted=dist.map((el,idx)=>el/speed[idx]).sort((a,b)=>a-b);
    for(let i=0; i<sorted.length; i++){
        if(i>=sorted[i]){
            return i;
        }
    }
    return sorted.length;
};