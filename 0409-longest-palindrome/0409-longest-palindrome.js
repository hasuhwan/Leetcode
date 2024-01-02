/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let answer=0;
    let isOdd=0;
    const map=new Map();
    for(let i=0; i<s.length; i++){
        const char=s[i];
        map.set(char,(map.get(char)||0)+1);
    }
    for(let val of map.values()){
        if(val%2===0){
            answer+=val;
        }else{
            answer+=val-1;
            isOdd=1;
        }
    }
    return answer+isOdd;
};