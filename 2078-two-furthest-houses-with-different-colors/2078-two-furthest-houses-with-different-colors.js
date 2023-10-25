/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
    let max=1;
    for(let i=0; i<colors.length-1; i++){
        for(let j=i+max; j<colors.length; j++){
            if(colors[j]!==colors[i]){
                max=j-i;
            }
        }
    }
    return max;
};