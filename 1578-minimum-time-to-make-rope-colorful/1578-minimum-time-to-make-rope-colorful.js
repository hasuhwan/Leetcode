/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    let answer=0;
    const stack=[];
    for(let i=0; i<colors.length; i++){
        const temp=colors[i];
        if(stack.length&&stack[stack.length-1][0]===temp){
            if(neededTime[i]>stack[stack.length-1][1]){
                answer+=stack.pop()[1];
                stack.push([temp,neededTime[i]]);
            }else{
                answer+=neededTime[i];
            }
        }else{
        stack.push([temp,neededTime[i]]);    
        }
        
    }
    return answer;
};