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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const answer=[];
    function dfs(node){
        if(!node){
            return;
        }
        dfs(node.left);
        answer.push(node.val);
        dfs(node.right);
    }
    dfs(root);
    return answer;
};