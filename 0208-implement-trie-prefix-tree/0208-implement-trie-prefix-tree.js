class Node{
    constructor(){
        this.end=false;
        this.next={};
    }
}


var Trie = function() {
    this.trie=new Node();

};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let curr=this.trie;
    for(let char of word){
        if(!curr.next[char]){
            curr.next[char]=new Node();
        }
        curr=curr.next[char];
    }
    curr.end=true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let curr=this.trie;
    for(let char of word){
        if(!curr.next[char]){
            return false;
        }
        curr=curr.next[char];
    }
    if(curr.end){
        return true;
    }
    return false;
    
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
      let curr=this.trie;
    for(let char of prefix){
        if(!curr.next[char]){
            return false;
        }
        curr=curr.next[char];
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */