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
var goodNodes = function(root) {
    let answer=0;
    function dfs(node,max){
        if(node===null){
            return;
        }
        if(node.val>=max){
            answer++;
        }
        dfs(node.left,Math.max(node.val,max));
        dfs(node.right,Math.max(node.val,max));
    }
    dfs(root,-Infinity);
    return answer;
};