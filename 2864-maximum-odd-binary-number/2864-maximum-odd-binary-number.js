/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    let one=0;
    for(let char of s){
        if(char==="1"){
            one++;
        }
    }
    
    return "1".repeat(one-1)+"0".repeat(s.length-one)+"1";
};