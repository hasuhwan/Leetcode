/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function(number) {
    const answer=[];
    const temp=number.replace(/ |-/g,"");
    let idx=0;
    let str=temp.slice(idx);
    while(str.length>4){
        answer.push(str.slice(idx,idx+3));
        str=str.slice(idx+3);
    }
    if(str.length===2||str.length===3){
answer.push(str);
    }else{
        answer.push(str.slice(0,2));
        answer.push(str.slice(2));
    }
    return answer.join("-");
};