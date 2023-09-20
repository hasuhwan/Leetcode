/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    let answer="";
    for(let i=0; i<s.length; i++){
        if(i%2===0){
            answer+=s[i];
        }else{
            answer+=String.fromCharCode(s[i-1].charCodeAt()+Number(s[i]));
        }
    }
    return answer;
};