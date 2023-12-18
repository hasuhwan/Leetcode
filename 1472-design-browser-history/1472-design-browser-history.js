/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.stack=[homepage];
    this.idx=0;
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    this.stack = this.stack.slice(0,this.idx+1);
    this.stack.push(url);
    this.idx++;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    this.idx=steps>this.idx?0:this.idx-steps;
    return this.stack[this.idx];
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    this.idx=steps>this.stack.length-1-this.idx?this.stack.length-1:this.idx+steps;
    return this.stack[this.idx];
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */