/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let answer=0;
    const arr=[["I",1],["V",5],["X",10],["L",50],["C",100],["D",500],["M",1000]];
    const obj={};
    arr.forEach((el,idx)=>{
        obj[el[0]]={value:el[1],idx};
    })
    for(let i=0; i<s.length; i++){
        if(i===s.length-1){
            answer+=obj[s[i]].value;
            return answer;
        }
        if(obj[s[i]].idx>=obj[s[i+1]].idx){
            answer+=obj[s[i]].value;
        }else{
            answer+=obj[s[i+1]].value-obj[s[i]].value;
            i++;
        }
    }
    return answer;
};