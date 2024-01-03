
var FreqStack = function() {
    this.max=0;
    this.freqMap=new Map();
    this.numMap=new Map();
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) {
    this.numMap.set(val,(this.numMap.get(val)||0)+1);
    const data=this.numMap.get(val);
    if(this.max<data){
        this.max=data;
    }
    if(!this.freqMap.has(data)){
        this.freqMap.set(data,[]);
    }
    this.freqMap.get(data).push(val);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    const arr=this.freqMap.get(this.max);
    const data=arr.pop();
    this.numMap.set(data,this.numMap.get(data)-1);
    if(arr.length===0){
        this.max--;
    }
    return data;
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */