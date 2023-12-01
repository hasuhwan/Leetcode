/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var getAncestors = function(n, edges) {
    const answer=new Array(n).fill(null);
    const map=new Map();
    const dp=new Array(n).fill(null);
    edges.forEach(([from,to])=>{
        if(!map.has(to)){
            map.set(to,[]);
        }
        map.get(to).push(from);
    });
    function dfs(node){
        if(!map.has(node)){
            dp[node]=new Set();
        }
        if(dp[node]!==null){
            return [...dp[node]];
        }
         
        const from=map.get(node);
        const curr=[];
        from.forEach(next=>{
            curr.push(...dfs(next));
        });
        
        dp[node]=new Set(from.concat(curr));
        return [...dp[node]];
    }
    for(let i=0; i<n; i++){
        if(!map.has(i)){
            dp[i]=new Set();
            answer[i]=[...dp[i]];
        }else{
            answer[i]=dfs(i);
        }
    }
    return answer.map(arr=>arr.sort((a,b)=>a-b));
};