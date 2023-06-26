/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function(rolls, mean, n) {
    const sum=(rolls.length+n)*mean;
    let minus=sum-rolls.reduce((acc,cur)=>acc+cur,0);
if(minus<n||minus>n*6){
    return [];
}
    let time=0;
    while(minus>=time*n){
        minus-=n;
        time++;
    }
    const answer=new Array(n).fill(time);
    let index=0;
    while(minus>0){
        minus--;
        answer[index]++;
        if(answer[index]>=6){
            index++;
        }
    }
    return answer;
};