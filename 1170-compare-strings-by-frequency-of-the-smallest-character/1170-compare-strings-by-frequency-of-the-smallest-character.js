/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function(queries, words) {
    const answer=[];
    function max(str){
        let result=0;
        const small=str.split("").sort();
        for(let i=0; i<str.length; i++){
            if(small[0]===small[i]){
                result++;
            }else{
                break;
            }
        }
        return result;
    };
    
    queries=queries.map(el=>max(el));
    words=words.map(el=>max(el)).sort((a,b)=>b-a);
    queries.forEach(el=>{
        for(let i=0; i<words.length; i++){
            
            if(el>=words[i]){
                answer.push(i);
                return;
            }
        }
        answer.push(words.length);
    });
    return answer;
    
};