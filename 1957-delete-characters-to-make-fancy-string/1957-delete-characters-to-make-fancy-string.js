/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    let answer=s[0];
    let tempChar=s[0];
    let count=1;
    for(let i=1; i<s.length; i++){
        if(tempChar!==s[i]){
            answer+=s[i];
            tempChar=s[i];
            count=1;
        }else{
            if(count===2){
                continue;
            }else{
                count++;
                answer+=s[i];
            }
        }
    }
    return answer;
};