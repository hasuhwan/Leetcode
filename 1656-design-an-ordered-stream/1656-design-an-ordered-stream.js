/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    this.arr=new Array(n).fill(null);
    this.idx=0;
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    this.arr[idKey-1]=value;
    const res=[];
    while(this.idx<this.arr.length&&this.arr[this.idx]!==null){
        res.push(this.arr[this.idx++]);
    }
    return res;
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */