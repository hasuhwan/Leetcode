/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    const arr=profit.map((el,idx)=>[difficulty[idx],el]).sort((a,b)=>b[1]-a[1]);
    let answer=0;
    for(let i=0; i<worker.length; i++){
        for(let j=0; j<arr.length; j++){
            if(arr[j][0]<=worker[i]){
                answer+=arr[j][1];
                break;
            }
        }
    }
    return answer;
};