/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function(n) {
    for(let i=2; i<=n-2; i++){
        const temp=n.toString(i);
        const reverse=temp.split("").reverse().join("");
        if(temp!==reverse){
            return false;
        }
    }
    return true;
};