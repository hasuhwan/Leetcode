/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    const answer=[];
    words.sort((a,b)=>a.length-b.length);
    const wordsObj=words.map((str)=>{
        const obj={};
        for(let i=0; i<str.length; i++){
            obj[str[i]]=(obj[str[i]]||0)+1;
        }
        return obj;
    });
    const standard=wordsObj.shift();
    Object.entries(standard).forEach(([key,value])=>{
        let min=value;
        const bool=wordsObj.every(obj=>{
            if(obj[key]){
                min=Math.min(min,obj[key]);
                return true;
            }else{
                return false;
            }
        });
        if(bool){
            for(let i=0; i<min; i++){
                answer.push(key);
            }
        }
    });
    return answer;
};