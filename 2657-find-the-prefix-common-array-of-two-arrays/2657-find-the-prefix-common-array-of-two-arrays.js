/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    const answer=new Array(A.length).fill(0);
    
    const mapA=new Map();
    const mapB=new Map();
    let i=0;
    let acc=0;
    while(i<A.length){
        let common=0;
        mapA.set(A[i],(mapA.get(A[i])||0)+1);
        mapB.set(B[i],(mapB.get(B[i])||0)+1);
        for(let [key,value] of mapB.entries()){
            if(mapA.has(key)){
                const curr=mapA.get(key);
                if(curr===1){
                    mapA.delete(key);
                }else{
                    mapA.set(key,curr-1);
                }
                if(value===1){
                    mapB.delete(key);
                }else{
                    mapB.set(key,value-1);
                }
                common++;
            }
        }
        acc+=common;
        answer[i]=acc;
        i++;
    }
    return answer;
};