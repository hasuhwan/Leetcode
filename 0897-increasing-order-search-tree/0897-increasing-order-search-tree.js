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
var increasingBST = function(root) {
    const arr=[];
    function dfs(node){
        if(!node){
            return;
        }
        dfs(node.left);
        arr.push(node.val);
        dfs(node.right);
    }
    dfs(root);
    const tree=new TreeNode(arr[0]);
    let temp=tree;
    for(let i=1; i<arr.length; i++){
        temp.right=new TreeNode(arr[i]);
        temp=temp.right;
    }
    return tree;
};