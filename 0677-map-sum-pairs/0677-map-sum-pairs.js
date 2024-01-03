
var MapSum = function() {
    this.trie={};
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    let curr=this.trie;
    for(let i=0; i<key.length; i++){
        if(curr[key[i]]===undefined){
            curr[key[i]]={};
        }
        curr=curr[key[i]];
    }
    curr.value=val;
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    let curr=this.trie;
    for(let i=0; i<prefix.length; i++){
        if(curr[prefix[i]]===undefined){
            return 0;
        }
        curr=curr[prefix[i]];
    }
    
    function sum(obj) {
    let rtn = 0
    for (let k in obj) {
      if (k === 'value') rtn += obj[k]
      else rtn += sum(obj[k])
    }
    return rtn;
  }
    return sum(curr);
  
};

/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */