/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    let answer=""
    const al=[];
    const num=[];
    for(let char of s){
        if(!isNaN(char)){
            num.push(char);
        }else{
            al.push(char);
        }
    }
    let diff=al.length-num.length;
    if(Math.abs(diff)>=2){
        return ""
    }
    if(diff===1){
        num.push("");
    }else if(diff===-1){
        al.unshift("");
    }
    for(let i=0; i<al.length; i++){
        answer+=al[i]+num[i];
    }
    return answer;
};