/**
 * @param {number} n
 * @param {number[][]} relations
 * @param {number[]} time
 * @return {number}
 */
//배우는데 걸리는 시간을 저장해 두면? 바로 꺼내서 쓸 수 있지 않나? =>dp
//각 노드 별 배우는 시간이 필요하다?


var minimumTime = function(n, relations, time) {
    const answer=new Array(n+1).fill(0);
    const map=new Map();
    relations.forEach(([from,to])=>{
        if(!map.has(to)){
            map.set(to,[]);
        }
        map.get(to).push(from);
    });
    function dfs(node){
        if(!map.has(node)){
            answer[node]=time[node-1];
            return answer[node];
        }
        const nodes=map.get(node);
        const temp=[];
        nodes.forEach(el=>{
            if(answer[el]!==0){
                temp.push(answer[el]);
            }else{
                temp.push(dfs(el));
            }
        });
        answer[node]=Math.max(...temp)+time[node-1];
        return answer[node];
    }
    for(let i=1; i<=n; i++){
        if(answer[i]!==0){
            continue;
        }
        dfs(i);
    }
    console.log(answer)
return Math.max(...answer);
};