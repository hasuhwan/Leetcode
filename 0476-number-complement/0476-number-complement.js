/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    const str=num.toString(2);
    let comStr="";
    for(let i=0; i<str.length; i++){
        if(str[i]==="1"){
            comStr+="0"
        }else{
            comStr+="1"
        }
    }
    return parseInt(comStr,2)
};