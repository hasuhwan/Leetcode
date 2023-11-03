/**
 * @param {number} n
 */
var LUPrefix = function(n) {
    this.arr=new Array(n+1).fill(false);
    this.arr[0]=true;
    this.len=0;
};

/** 
 * @param {number} video
 * @return {void}
 */
LUPrefix.prototype.upload = function(video) {
    this.arr[video]=true;
    if(this.len===video-1){
        while(this.arr[this.len+1]&&this.len<this.arr.length){
            this.len++;
        }
    }
    
};

/**
 * @return {number}
 */
LUPrefix.prototype.longest = function() {
    return this.len;
};

/** 
 * Your LUPrefix object will be instantiated and called as such:
 * var obj = new LUPrefix(n)
 * obj.upload(video)
 * var param_2 = obj.longest()
 */