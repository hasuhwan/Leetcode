/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let answer=0;
    let bool=false;
    for(let i=0; i<s.length; i++){
        if(s[i]!==" "&&bool===false){
            bool=true;
        }else if(s[i]===" "){
            if(bool===true){
                bool=false;
                answer++;
            }
        }
    }
    if(bool===true){
        answer++;
    }
    return answer;
};