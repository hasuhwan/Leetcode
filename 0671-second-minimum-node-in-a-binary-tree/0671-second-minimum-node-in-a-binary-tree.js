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
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
    const set=new Set();
    
    function dfs(node){
        if(!node){
            return;
        }
        set.add(node.val);
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);
    const sorted=[...set.values()].sort((a,b)=>a-b);
    return sorted.length<2?-1:sorted[1];
    
};