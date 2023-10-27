/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const answer=[];
    const map=new Map();
    ["qwertyuiop","asdfghjkl","zxcvbnm"].forEach((str,idx)=>{
        str.split("").forEach(s=>{
            map.set(s,idx+1);
        })
    });
    const arr=words.map(str=>str.toLowerCase()).forEach((str,idx)=>{
        const standard=map.get(str[0]);
        for(let i=1; i<str.length; i++){
            if(standard!==map.get(str[i])){
                return;
            }
        }
            answer.push(words[idx]);
        
    });
    
    return answer;
    
    
};