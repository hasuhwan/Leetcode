/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    const list=[];
    
    function dfs(node){
        if(!node){
            return;
        }
        dfs(node.left);
        list.push(node.val);
        dfs(node.right);
    }
    dfs(root1);
    dfs(root2);
    return list.sort((a,b)=>a-b);
};