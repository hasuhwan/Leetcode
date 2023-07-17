/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const answer=[];
    const queue=[[graph[0],[0]]];
    const def=graph.length-1
    while(queue.length!==0){
        const [to,visited]=queue.shift();
        
        to.forEach(el=>{
            if(el===def){
                answer.push([...visited,el]);
                return;
            }
            if(!visited.includes(el)){
                queue.push([graph[el],[...visited,el]]);
            }
        })
    }
    return answer;
};