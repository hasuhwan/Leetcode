/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    let answer=0;
    const half=costs.length/2;
    costs.sort((a,b)=>(a[0]-a[1])-(b[0]-b[1]));
    for(let i=0; i<half; i++){
        answer+=costs[i][0]+costs[i+half][1];
    }
    return answer;
};