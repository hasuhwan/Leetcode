/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
var FindSumPairs = function(nums1, nums2) {
    this.map=new Map();
    this.nums1=nums1;
    this.nums2=nums2;
    this.nums2.forEach(num=>{
        this.map.set(num,(this.map.get(num)||0)+1);
    });
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function(index, val) {
    const prev=this.nums2[index];
    this.map.set(prev,this.map.get(prev)-1);
    if(this.map.get(prev)===0){
        this.map.delete(prev);
    }
    const curr=prev+val;
    this.map.set(curr,(this.map.get(curr)||0)+1);
    this.nums2[index]=curr;
};

/** 
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function(tot) {
let count=0;
    this.nums1.forEach(num=>{
        if(num>=tot){
            return;
        }
        const diff=tot-num;
        count+=this.map.get(diff)||0;
    });
    return count;
};

/** 
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */