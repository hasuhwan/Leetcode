/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */


var rangeSumBST = function(root, low, high) {
    function dfs(node){
        if(!node){
        return 0;
    }
    const val=node.val>=low&&node.val<=high?node.val:0;
    
    return val+dfs(node.left)+dfs(node.right);
    }
    return dfs(root);
};