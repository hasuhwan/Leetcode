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
 * @return {TreeNode}
 */
var pruneTree = function(root) {
    function dfs(node){
        if(!node){
            return null;
        }
        if(!node.left&&!node.right&&node.val===0){
            return null;
        }else{
            node.left=dfs(node.left);
            node.right=dfs(node.right);
             if(!node.left&&!node.right&&node.val===0){
            return null;
        }
        }
        return node;
    }
    return dfs(root);
};


