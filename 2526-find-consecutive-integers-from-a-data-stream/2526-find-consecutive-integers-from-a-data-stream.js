/**
 * @param {number} value
 * @param {number} k
 */
var DataStream = function(value, k) {
    this.value=value;
    this.k=k;
    this.count=0;
};

/** 
 * @param {number} num
 * @return {boolean}
 */
DataStream.prototype.consec = function(num) {
    this.count=num!==this.value?0:this.count+1;
    return this.count>=this.k;
};

/** 
 * Your DataStream object will be instantiated and called as such:
 * var obj = new DataStream(value, k)
 * var param_1 = obj.consec(num)
 */