
var RecentCounter = function() {
    this.queue=[];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    const min=t-3000;
    const max=t;
    while(this.queue.length!==0&&this.queue[0]<min){
        this.queue.shift();
    }
    this.queue.push(t);
    return this.queue.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */