
var WordDictionary = function() {
    this.object={bool:false,next:{}};
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let temp=this.object;
    for(let char of word){
        if(!temp.next[char]){
            temp.next[char]={bool:false,next:{}};
        }
        temp=temp.next[char];
    }
    temp.bool=true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    const dfs = (index, root) => {
        let current = root
    
        for(let i = index; i < word.length; i++){
            let char = word[i]
        
            if(char === "."){
            //use backtracking to 
                for(const char of Object.keys(current.next)){
                    if(dfs(i + 1, current.next[char])){
                        return true
                    }     
                }
                return false;
            }else{
                if(!current.next[char]){
                    return false
                }
                //move pointer to that node if the next letter exists
                current = current.next[char]
            }
        }
        return current.bool;
        
    }
    
    return dfs(0, this.object);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */