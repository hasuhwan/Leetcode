/**
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 */
var twoEditWords = function(queries, dictionary) {
    let answer=[];
    
    queries.forEach(word=>{
       const bool= dictionary.some(dic=>{
            let diff=0;
            for(let i=0; i<dic.length; i++){
                if(dic[i]!==word[i]){
                    diff++;
                }
                if(diff>2){
                    return false;
                }
            }
           return true;
        })
       if(bool){
           answer.push(word);
       }
    })
    return answer;
};