/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {
    const map=new Map();
    for(let i=lowLimit; i<=highLimit; i++){
        let temp=i;
        let sum=0;
        while(temp!==0){
            sum+=temp%10;
            temp=Math.floor(temp/10);
        }
        map.set(sum,(map.get(sum)||0)+1);
    }
    return Math.max(...map.values());
};