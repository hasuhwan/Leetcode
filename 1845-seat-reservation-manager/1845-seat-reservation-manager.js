/**
 * @param {number} n
 */
var SeatManager = function(n) {
    this.idx=1;
    this.unreserveArr=[];
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function() {
    if(this.unreserveArr.length!==0){
        return this.unreserveArr.pop();
    }
    return this.idx++;
};

/** 
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function(seatNumber) {
    this.unreserveArr=[...this.unreserveArr,seatNumber].sort((a,b)=>b-a);
};

/** 
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */