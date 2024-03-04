/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
    const splited=text.split(" ");
    const answer=[];
    for(let i=2; i<splited.length; i++){
        if(splited[i-2]===first&&splited[i-1]===second){
            answer.push(splited[i]);
        }
    }
    return answer;
};