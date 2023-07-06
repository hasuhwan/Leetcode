/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let numStr="";
    for(let i=0; i<s.length; i++){
        numStr+=s[i].charCodeAt()-96;
    }
    while(k>0){
        let sum=0;
        for(let i=0; i<numStr.length; i++){
            sum+=Number(numStr[i]);
        }
        numStr=String(sum);
        k--;
    }
    return numStr;
};