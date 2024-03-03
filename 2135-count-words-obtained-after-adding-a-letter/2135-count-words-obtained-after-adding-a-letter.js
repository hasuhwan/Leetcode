/**
 * @param {string[]} startWords
 * @param {string[]} targetWords
 * @return {number}
 */
var wordCount = function(startWords, targetWords) {
    let answer=0;
    function sorting(str){
        return str.split("").sort().join("");
    }
    const set=new Set();
    startWords.forEach(str=>{
        set.add(sorting(str));
    });
    
    targetWords.forEach(str=>{
        const sorted=sorting(str);
        for(let i=0; i<sorted.length; i++){
            const temp=sorted.slice(0,i)+sorted.slice(i+1);
            if(set.has(temp)){
                answer++;
                return;
            }
        }
    });
    return answer;
};