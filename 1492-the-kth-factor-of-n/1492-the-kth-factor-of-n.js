/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    const set=new Set();
    for(let i=1; i<=Math.sqrt(n,2); i++){
        if(n%i===0){
            set.add(i);
            set.add(n/i);
        }
    }
    const sorted=[...set].sort((a,b)=>a-b);
    return sorted.length<k?-1:sorted[k-1];
};