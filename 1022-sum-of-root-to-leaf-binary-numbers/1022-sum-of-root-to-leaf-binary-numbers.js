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
var sumRootToLeaf = function(root) {
    let answer=0;
    function dfs(node,str){
        if(!node){
            return;
        }
        let next=str+node.val;
        if(!node.left&&!node.right){
            answer+=parseInt(next,2);
            return;
        }
        dfs(node.left,next);
        dfs(node.right,next);
        
    }
    dfs(root,"");
        return answer;
};