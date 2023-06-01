/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    return temperatures.map((el,idx)=>{
        for(let i=idx+1;i<temperatures.length; i++){
            if(el<temperatures[i]){
                return i-idx;
            }
        }
        return 0;
    })
};