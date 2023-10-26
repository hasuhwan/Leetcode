/**
 * @param {number} n
 * @param {number} m
 */
var BookMyShow = function(n, m) {
    this.row=new Array(n).fill(0);
    this.col=m;
};

/** 
 * @param {number} k 
 * @param {number} maxRow
 * @return {number[]}
 */
BookMyShow.prototype.gather = function(k, maxRow) {
    for(let i=0; i<=maxRow; i++){
        const allow=this.col-this.row[i];
        if(allow>=k){
            const start=this.row[i];
            this.row[i]+=k;
            return [i,start];
        }
    }
    return [];
};

/** 
 * @param {number} k 
 * @param {number} maxRow
 * @return {boolean}
 */
BookMyShow.prototype.scatter = function(k, maxRow) {
    let total=0;
    for(let i=0; i<=maxRow; i++){
        total+=this.col-this.row[i];
    }
    if(total<k){
        return false;
    }
    for(let i=0; i<=maxRow; i++){
        const allow=this.col-this.row[i];
            if(allow>=k){
                this.row[i]+=k;
                k=0;
                return true;
            }else{
                k-=allow;
                this.row[i]=this.col;
            }
        
    }
    return true;
};

/** 
 * Your BookMyShow object will be instantiated and called as such:
 * var obj = new BookMyShow(n, m)
 * var param_1 = obj.gather(k,maxRow)
 * var param_2 = obj.scatter(k,maxRow)
 */