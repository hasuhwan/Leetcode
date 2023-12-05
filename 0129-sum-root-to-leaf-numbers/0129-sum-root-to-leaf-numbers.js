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
var sumNumbers = function(root) {
    let answer=0;
    function dfs(node,str){
        if(node===null){
            return;
        }
        str+=node.val;
        if(!node.left&&!node.right){
        answer+=Number(str);
            return;
        }
        
        dfs(node.left,str);
        dfs(node.right,str);
    }
    dfs(root,"");
    return answer;
};