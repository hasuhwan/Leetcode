/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    let result="";
    for(let i=0; i<s.length; i++){
        result+=s[i];
        if(result.slice(-3)==="abc"){
            result=result.slice(0,result.length-3);
        }
    }
    return result===""?true:false;
};