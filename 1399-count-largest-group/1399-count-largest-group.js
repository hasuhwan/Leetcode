/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
    let max=0;
    let val=0;
    const map=new Map();
    for(let i=1; i<=n; i++){
        const sum=String(i).split("").reduce((acc,cur)=>acc+Number(cur),0);
        map.set(sum,(map.get(sum)||0)+1);
    }
    for(let count of map.values()){
        if(count===max){
            val++;
        }else if(count>max){
            max=count;
            val=1;
        }
    }
    return val;
};