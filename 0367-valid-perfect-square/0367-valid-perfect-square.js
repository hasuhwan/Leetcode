/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    const sqrt=Math.sqrt(num);
    return sqrt===Math.floor(sqrt);
};