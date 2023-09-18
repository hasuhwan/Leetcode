/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    let answer=true;
    let prev=s[0];
    for(let i=1; i<s.length; i++){
        if(s[i]==="a"){
            if(prev==="b"){
                return false;                
            }
        }else{
            prev="b";
        }
    }
    return answer;
};