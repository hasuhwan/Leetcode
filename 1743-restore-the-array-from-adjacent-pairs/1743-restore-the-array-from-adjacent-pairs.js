/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
var restoreArray = function(adjacentPairs) {
    const map=new Map();
    adjacentPairs.forEach(([one,two])=>{
        if(!map.has(one)){
            map.set(one,[]);
        }
        if(!map.has(two)){
            map.set(two,[]);
        }
        map.get(one).push(two);
        map.get(two).push(one);
    });
    const queue=[];
    for(let [key,value] of map.entries()){
        if(value.length===1){
            queue.push(key);
            break;
        }
    }
    const set=new Set();
    while(queue.length!==0){
        const temp=queue.shift();
        set.add(temp);
        const next=map.get(temp);
        next.forEach((num)=>{
            if(!set.has(num)){
                queue.push(num);
            }
        })
    }
    return [...set];
};