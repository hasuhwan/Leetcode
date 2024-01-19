/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function(batteryPercentages) {
    let answer=0;
    let count=0;
    batteryPercentages.forEach((el)=>{
        if(el-count>0){
            answer++;
            count++;
        }
    });
    return answer;
};