/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
    const answer=[];
    words.forEach(el=>{
        const obj={}
        let bool=true;
        const visited=[];
for(let i=0; i<el.length; i++){
    
            if(obj[pattern[i]]===undefined&&!visited.includes(el[i])){
                obj[pattern[i]]=el[i];
                visited.push(el[i]);
            }else{
                if(obj[pattern[i]]!==el[i]){
                    bool=false;
                    break;
                }
            }
}
        
        if(bool){
            answer.push(el);
        }
    })
    return answer;
};