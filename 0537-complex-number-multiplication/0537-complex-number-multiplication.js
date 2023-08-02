/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function(num1, num2) {
    function div(str){
        return str.slice(0,str.length-1).split("+").map(el=>Number(el));
    }
    const one=div(num1);
    const two=div(num2);
    const real=one[0]*two[0]-(one[1]*two[1]);
    const imaginary=one[0]*two[1]+two[0]*one[1];
    return `${real}+${imaginary}i`;
};