/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    const aMap=new Map();
    const bMap=new Map();
    for(let i=1; i<=n; i++){
        aMap.set(i,new Set());
        bMap.set(i,new Set());
    }
    trust.forEach(([a,b])=>{
        aMap.get(a).add(b);
        bMap.get(b).add(a);
    });
    
    for(let [akey,avalue] of aMap.entries()){
        if(avalue.size===0 && bMap.get(akey).size===n-1){
            return akey;
        }
    }
    return -1;
};