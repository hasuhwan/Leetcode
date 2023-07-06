/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */
var distanceTraveled = function(mainTank, additionalTank) {
    let answer=0;
    while(mainTank>=5&&additionalTank>0){
        answer+=5;
        mainTank-=4;
        additionalTank--;
    }
    answer+=mainTank;
    return answer*10;
};