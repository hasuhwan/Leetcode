/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.map=new Map();
    nums.forEach((num,idx)=>{
        if(!this.map.has(num)){
            this.map.set(num,[]);
        }
        this.map.get(num).push(idx);
    })
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    const arr=this.map.get(target);
    const len=arr.length;
    const random=Math.floor(Math.random() * len);
    return arr[random];
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */