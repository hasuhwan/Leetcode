/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let answer="";
    let count=0;
    let start=0;
    for(let i=0; i<s.length; i++){
        if(s[i]==="("){
            if(count===0){
                start=i;
            }
            count++;
        }else{
            count--;
            if(count===0){
                answer+=s.slice(start+1,i);
            }
        }
    }
    return answer;
};