/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function(satisfaction) {
    satisfaction.sort((a,b)=>a-b);
    let max=satisfaction.reduce((acc,cur,i)=>acc+cur*(i+1),0);
    let sum=satisfaction.reduce((acc,cur)=>acc+cur,0);
    
    for(let i=0; i<satisfaction.length; i++){
        if(max>max-sum){
            return max;
        }
        max-=sum;
        sum-=satisfaction[i];
    }
    return 0;
};