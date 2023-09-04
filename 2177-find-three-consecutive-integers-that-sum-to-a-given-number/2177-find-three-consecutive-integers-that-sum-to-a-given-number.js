/**
 * @param {number} num
 * @return {number[]}
 */
var sumOfThree = function(num) {
    if(num%3!==0){
        return [];
    }
    const temp=num/3;
    
    return [temp-1, temp, temp+1];
};