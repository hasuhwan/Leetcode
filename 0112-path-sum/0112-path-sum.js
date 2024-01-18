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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root){
        return false;
    }
    function dfs(node,sum){
        if(node&&!node.left&&!node.right&&sum+node.val===targetSum){
            return true;
        }
        if((node.left&&dfs(node.left,sum+node.val))||(node.right&&dfs(node.right,sum+node.val))){
            return true;
        }
        return false;
        
    }
    return dfs(root,0);
};