/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if(nums.length===0){
        return null;
    }
    if(nums.length===1){
        return new TreeNode(nums[0]);
    }
    const pivot=Math.floor(nums.length/2);
    const tree=new TreeNode(nums[pivot]);
    const left=nums.slice(0,pivot);
    const right=nums.slice(pivot+1);
    tree.left=sortedArrayToBST(left);
    tree.right=sortedArrayToBST(right);
    return tree;
};