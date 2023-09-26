/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if(!wordList.includes(endWord)){
        return 0;
    }
    const visited=new Array(wordList.length).fill(false);
    const queue=[[beginWord,1]];
    
    while(queue.length!==0){
        const [temp,count]=queue.shift();
        if(temp===endWord){
            return count;
        }
        wordList.forEach((str,idx)=>{
            if(visited[idx]){
                return;
            }
            let diff=0;
            for(let i=0; i<str.length; i++){
                if(str[i]!==temp[i]){
                    diff++;
                }
                if(diff>=2){
                    return;
                }
            }
            if(diff===1){
                queue.push([str,count+1]);
                visited[idx]=true;
            }
        })
    }
    return 0;
    
};