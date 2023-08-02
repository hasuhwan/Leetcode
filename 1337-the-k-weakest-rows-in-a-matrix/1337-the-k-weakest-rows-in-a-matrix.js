/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    return mat.map((el,idx)=>{
        const val=el.reduce((acc,cur)=>cur===1?acc+1:acc,0);
        return [val,idx];
    }).sort((a,b)=>a[0]-b[0]).slice(0,k).map(el=>el[1]);
};