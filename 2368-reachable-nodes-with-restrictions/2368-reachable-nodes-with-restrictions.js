/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
var reachableNodes = function(n, edges, restricted) {
    const visitedSet=new Set([0]);
    const restricetedSet=new Set(restricted);
    const map=new Map();
    edges.forEach(([one,two])=>{
        if(!map.has(one)){
            map.set(one,[]);
        }
        if(!map.has(two)){
            map.set(two,[]);
        }
        map.get(one).push(two);
        map.get(two).push(one);
    });
    const queue=[0];
    while(queue.length!==0){
        const node=queue.shift();
        const linked=map.get(node);
        for(let nextNode of linked){
            if(!visitedSet.has(nextNode)&&!restricetedSet.has(nextNode)){
                visitedSet.add(nextNode);
                queue.push(nextNode);
            }
        }
    }
    return visitedSet.size;

};