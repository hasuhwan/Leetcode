class Node{
    constructor(){
        this.end=false;
        this.next={};
    }
}


var MagicDictionary = function() {
    this.dict=new Node();
};

/** 
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dictionary) {
    dictionary.forEach(word=>{
        let curr=this.dict;
        for(let char of word){
            if(!curr.next[char]){
                curr.next[char]=new Node();
            }
            curr=curr.next[char];
        }
        curr.end=true;
    });
};

/** 
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(searchWord) {
    const len=searchWord.length;
    function dfs(node,count,idx){
        if(count>1){
            return false;
        }
        if(idx===len){
            if(count===1&&node.end){
                return true;
            }
            return false;
        }
        for(let key of Object.keys(node.next)){
            if(key===searchWord[idx]){
                if(dfs(node.next[key],count,idx+1)){
                    return true;
                }
            }else{
                if(dfs(node.next[key],count+1,idx+1)){
                    return true;
                }
            }
        }
        return false;
    }
    return dfs(this.dict,0,0);
};

/** 
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */