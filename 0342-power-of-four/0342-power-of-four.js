/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    function dfs(num){
       if(num===0){
           return false;
       }else if(num===1){
           return true;
       }else if(Number.isInteger(num/4)){
           return dfs(num/4);
       }
        return false;
    }
    return dfs(n);
};