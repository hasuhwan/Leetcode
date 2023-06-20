/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function(logs, k) {
    const map=new Map();
    const answer=new Array(k).fill(0);
    logs.forEach(([id,min])=>{
        if(!map.has(id)){
            map.set(id,new Set([min]));
        }else{
            map.set(id,map.get(id).add(min));
        }
    })
for(let el of map.values()){
    answer[el.size-1]++;
}
    return answer;
};