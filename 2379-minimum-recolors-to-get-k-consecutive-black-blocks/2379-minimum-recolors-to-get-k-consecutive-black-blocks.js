/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
    let answer=Infinity;
    const arr=blocks.split("").map(el=>el==="W"?0:1);
    let temp=arr.slice(0,k).reduce((acc,cur)=>acc+cur,0);

    answer=k-temp;
    for(let i=k; i<arr.length; i++){
        temp+=arr[i]-arr[i-k];
        answer=Math.min(answer,k-temp);
    }
    return answer;
};