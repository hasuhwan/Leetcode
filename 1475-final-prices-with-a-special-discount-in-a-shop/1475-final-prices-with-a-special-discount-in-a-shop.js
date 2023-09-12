/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    const answer=[...prices];
    const stack=[];
    prices.forEach((num,i)=>{
        if(stack.length!==0&&num<=prices[stack[stack.length-1]]){
            while(num<=prices[stack[stack.length-1]]){
                const idx=stack.pop();
                answer[idx]=prices[idx]-num;
            }
         
        }
           stack.push(i);
        
    });
    return answer;
};