/**
 * @param {number} total
 * @param {number} cost1
 * @param {number} cost2
 * @return {number}
 */
var waysToBuyPensPencils = function(total, cost1, cost2) {
    let answer=0;
    const max=Math.max(cost1,cost2);
    const min=Math.min(cost1,cost2);
    
    while(total>=0){
        answer+=Math.floor(total/min)+1;
        total-=max;
    }
    return answer;
};