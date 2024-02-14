/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function(n, k) {
    let answer="";
    n--;
    while(n!==0){
        const mod=n*26;
        if(mod>=k){
            answer+="a";
            k--;
        }else{
            const diff=k-mod;
            answer+=String.fromCharCode(diff+96);
            k-=diff;
        }
        n--;
    }
    return answer+String.fromCharCode(96+k);
};

