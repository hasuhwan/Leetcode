/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
    let answer=0;
    const extra=capacity.map((el,idx)=>{
        return el-rocks[idx];
    }).sort((a,b)=>a-b);
    for(let i=0; i<extra.length; i++){
        if(additionalRocks-extra[i]>=0){
            additionalRocks-=extra[i];
            answer++;
        }else{
            return answer;
        }
    }
    return answer;
    
};