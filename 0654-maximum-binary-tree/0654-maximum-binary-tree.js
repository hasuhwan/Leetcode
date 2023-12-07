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
var constructMaximumBinaryTree = function(nums) {
    if(nums.length===0){
        return null;
    }
    const node=new TreeNode(Math.max(...nums));
    const idx=nums.findIndex(num=>num===node.val);
    node.left=constructMaximumBinaryTree(nums.slice(0,idx));
    node.right=constructMaximumBinaryTree(nums.slice(idx+1));
    return node;
};