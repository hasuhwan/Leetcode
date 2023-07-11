/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    return indices.map((el,idx)=> [el,s[idx]]).sort((a,b)=>a[0]-b[0]).map(el=>el[1]).join("");
};