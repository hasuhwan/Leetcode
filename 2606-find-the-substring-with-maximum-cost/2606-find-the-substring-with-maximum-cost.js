/**
 * @param {string} s
 * @param {string} chars
 * @param {number[]} vals
 * @return {number}
 */
var maximumCostSubstring = function(s, chars, vals) {
    const obj={};
    for(let i=0; i<chars.length; i++){
        obj[chars[i]]=vals[i];
    }
    for(let i=97; i<123; i++){
        const char=String.fromCharCode(i);
        if(obj[char]===undefined){
            obj[char]=i-96;
        }
    }
    let curr=0;
    let max=0;
    for(let i=0; i<s.length; i++){
        curr=Math.max(0,curr+obj[s[i]]);
        max=Math.max(max,curr);
    }
    return max;
};