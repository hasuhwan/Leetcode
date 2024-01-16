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
var sumEvenGrandparent = function(root) {
    let answer=0;
    function dfs(node,p,gp){
        if(!node){
            return;
        }
        if(gp&&gp%2===0){
            answer+=node.val;
        }
        dfs(node.left,node.val,p);
        dfs(node.right,node.val,p);
    }
    dfs(root,null,null);
    return answer;
};